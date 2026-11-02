// 云函数 date_invite_create —— 生成不重复邀请码并写入 date_invites
// 约会邀请的全部 UGC（称呼/时间/地点/活动/留言）过一遍内容安全检测
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();
const COLL = 'date_invites';
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 去掉 I/1/O/0 等易混字符

function s(v, max) { return String(v || '').trim().slice(0, max); }

/** 内容安全检测：命中返回 true；服务异常时不拦截（fail-open，打日志人工兜底） */
async function contentRisky(text, openid) {
  const content = String(text || '').trim();
  if (!content || !openid) return false;
  try {
    const res = await cloud.openapi.security.msgSecCheck({
      version: 2,
      scene: 2, // 评论场景
      openid,
      content
    });
    const r = (res && res.result) || {};
    return r.suggest !== 'pass';
  } catch (e) {
    console.error('msgSecCheck failed', e.errCode || e.message);
    return false;
  }
}

async function ensureColl() {
  try { await db.createCollection(COLL); } catch (e) { /* 已存在 */ }
}

async function codeFree(code) {
  const r = await db.collection(COLL).where({ code }).count();
  return r.total === 0;
}

function genCode() {
  let c = '';
  for (let i = 0; i < 6; i++) c += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  return c;
}

exports.main = async (event) => {
  const p = event || {};
  const sender = s(p.p_sender, 60);
  const timeText = s(p.p_time, 200);
  const place = s(p.p_place, 200);
  const act = s(p.p_act, 200);
  const note = s(p.p_note, 300);
  const date = s(p.p_date, 20);

  try {
    const openid = (cloud.getWXContext() || {}).OPENID || '';
    if (await contentRisky([sender, timeText, place, act, note].filter(Boolean).join('\n'), openid)) {
      return { ok: false, code: 'CONTENT_BLOCKED', message: '内容没通过安全检测，换个说法试试吧' };
    }

    await ensureColl();
    let code = '';
    for (let i = 0; i < 5; i++) {
      const candidate = genCode();
      if (await codeFree(candidate)) { code = candidate; break; }
    }
    if (!code) return { ok: false, code: 'CODE_EXHAUSTED', message: '邀请码生成失败，再试一次' };

    const row = {
      code,
      owner_openid: openid,       // 留作后续「只看自己的邀请」扩展，前端不展示
      sender,
      time_text: timeText,
      place,
      act,
      note,
      date,
      answer: '',
      reply: '',
      message: '',
      created_at: new Date().toISOString(),
      answered_at: ''
    };
    await db.collection(COLL).add({ data: row });
    return { ok: true, data: [row] };
  } catch (e) {
    console.error('date_invite_create error', e.errCode || e.message);
    return { ok: false, code: 'DB_ERROR', message: '云端数据还没准备好，请稍后再试' };
  }
};
