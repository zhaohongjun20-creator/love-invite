// 云函数 date_invite_answer —— 凭邀请码写入答复（答复/留言同样过内容安全检测）
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();
const COLL = 'date_invites';

function clean(v) {
  return String(v || '').replace(/[^0-9a-zA-Z]/g, '').toUpperCase().slice(0, 12);
}

function s(v, max) { return String(v || '').trim().slice(0, max); }

/** 内容安全检测：命中返回 true；服务异常时不拦截（fail-open，打日志人工兜底） */
async function contentRisky(text, openid) {
  const content = String(text || '').trim();
  if (!content || !openid) return false;
  try {
    const res = await cloud.openapi.security.msgSecCheck({
      version: 2,
      scene: 2,
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

exports.main = async (event) => {
  const p = event || {};
  const code = clean(p.p_code);
  if (code.length < 4) {
    return { ok: false, code: 'BAD_CODE', message: '邀请码不对哦' };
  }
  const answer = s(p.p_answer, 40);
  const reply = s(p.p_reply, 500);
  const message = s(p.p_message, 300);

  try {
    const openid = (cloud.getWXContext() || {}).OPENID || '';
    if (await contentRisky([answer, reply, message].filter(Boolean).join('\n'), openid)) {
      return { ok: false, code: 'CONTENT_BLOCKED', message: '内容没通过安全检测，换个说法试试吧' };
    }

    const res = await db.collection(COLL).where({ code }).update({
      data: { answer, reply, message, answered_at: new Date().toISOString() }
    });
    if (!res.stats || !res.stats.updated) {
      return { ok: false, code: 'NOT_FOUND', message: '没找到这条邀请，邀请码是不是抄错了？' };
    }
    const doc = await db.collection(COLL).where({ code }).get();
    const row = doc.data && doc.data[0];
    if (!row) {
      return { ok: false, code: 'NOT_FOUND', message: '没找到这条邀请，邀请码是不是抄错了？' };
    }
    return { ok: true, data: [{
      code: row.code,
      sender: row.sender,
      time_text: row.time_text,
      place: row.place,
      act: row.act,
      note: row.note,
      date: row.date,
      answer: row.answer,
      reply: row.reply,
      message: row.message,
      created_at: row.created_at,
      answered_at: row.answered_at
    }] };
  } catch (e) {
    console.error('date_invite_answer error', e.errCode || e.message);
    return { ok: false, code: 'DB_ERROR', message: '云端数据还没准备好，请稍后再试' };
  }
};
