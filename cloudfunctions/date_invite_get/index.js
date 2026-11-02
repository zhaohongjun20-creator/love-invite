// 云函数 date_invite_get —— 按邀请码批量读取（码即凭证：必须知道码才能读到）
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();
const _ = db.command;
const COLL = 'date_invites';

function clean(v) {
  return String(v || '').replace(/[^0-9a-zA-Z]/g, '').toUpperCase().slice(0, 12);
}

exports.main = async (event) => {
  const codes = ((event && event.p_codes) || []).map(clean)
    .filter((c) => c.length >= 4).slice(0, 50);
  if (!codes.length) return { ok: true, data: [] };

  try {
    const res = await db.collection(COLL)
      .where({ code: _.in(codes) })
      .limit(codes.length)
      .get();
    // 只回传前端需要的展示字段，不把 owner_openid 带出去
    const data = (res.data || []).map((r) => ({
      code: r.code,
      sender: r.sender,
      time_text: r.time_text,
      place: r.place,
      act: r.act,
      note: r.note,
      date: r.date,
      answer: r.answer,
      reply: r.reply,
      message: r.message,
      created_at: r.created_at,
      answered_at: r.answered_at
    }));
    return { ok: true, data };
  } catch (e) {
    // 集合还不存在（首次部署后第一次查询）按空数据处理
    console.error('date_invite_get error', e.errCode || e.message);
    if (e.errCode === -502005 || /collection/i.test(e.errMsg || '')) {
      return { ok: true, data: [] };
    }
    return { ok: false, code: 'DB_ERROR', message: '云端数据还没准备好，请稍后再试' };
  }
};
