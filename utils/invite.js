// utils/invite.js —— 约会邀请的云端读写 + 本机邀请码簿
const { cloud } = require('./cloud.js');

const CODES_KEY = 'love_my_invite_codes';

function rows(data) {
  if (Array.isArray(data)) return data;
  return data ? [data] : [];
}

// 把云端错误翻译成人话；不把原始 rows / 凭证打进日志
function friendlyError(error) {
  if (!error) return '出了点小问题，稍后再试';
  const code = error.code || '';
  if (code === '42P01') return '云端数据还没准备好，请稍后再试';
  if (code === '42501') return '没有权限访问这条邀请';
  if (code === '23505') return '邀请码重复了，再试一次';
  if (code === 'PGRST202') return '云端接口还没就绪，请稍后再试';
  const status = error.status || error.statusCode;
  if (status === 401) return '云端连接失败，请稍后再试';
  return '网络不太顺，检查一下再试';
}

function normalizeCode(input) {
  return String(input || '').replace(/[^0-9a-zA-Z]/g, '').toUpperCase().slice(0, 12);
}

/** 发起邀请：云端生成邀请码，返回 6 位码 */
async function createInvite(payload) {
  const { data, error } = await cloud.database.rpc('date_invite_create', {
    p_sender: String(payload.sender || '').slice(0, 60),
    p_time: String(payload.time || '').slice(0, 200),
    p_place: String(payload.place || '').slice(0, 200),
    p_act: String(payload.act || '').slice(0, 200),
    p_note: String(payload.note || '').slice(0, 300),
    p_date: String(payload.date || '').slice(0, 20)
  });
  if (error) throw new Error(friendlyError(error));
  const row = rows(data)[0];
  if (!row || !row.code) throw new Error('云端没有返回邀请码，稍后再试');
  rememberCode(row.code);
  return row.code;
}

/** 按邀请码批量读取。接收方传 1 个，发起人传自己的一串 */
async function fetchInvites(codes) {
  const list = (codes || []).map(normalizeCode).filter((c) => c.length >= 4).slice(0, 50);
  if (!list.length) return [];
  const { data, error } = await cloud.database.rpc('date_invite_get', { p_codes: list });
  if (error) throw new Error(friendlyError(error));
  return rows(data);
}

/** 答复邀请 */
async function answerInvite({ code, answer, reply, message }) {
  const clean = normalizeCode(code);
  if (clean.length < 4) throw new Error('邀请码不对哦');
  const { data, error } = await cloud.database.rpc('date_invite_answer', {
    p_code: clean,
    p_answer: String(answer || '').slice(0, 40),
    p_reply: String(reply || '').slice(0, 500),
    p_message: String(message || '').slice(0, 300)
  });
  if (error) throw new Error(friendlyError(error));
  const row = rows(data)[0];
  if (!row) throw new Error('没找到这条邀请，邀请码是不是抄错了？');
  return row;
}

// ---------------- 本机邀请码簿（发起人自己记着） ----------------

function getCodes() {
  try {
    const list = wx.getStorageSync(CODES_KEY);
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function rememberCode(code) {
  const clean = normalizeCode(code);
  if (!clean) return;
  const list = getCodes().filter((c) => c !== clean);
  list.unshift(clean);
  try { wx.setStorageSync(CODES_KEY, list.slice(0, 50)); } catch (e) {}
}

function forgetCode(code) {
  const clean = normalizeCode(code);
  const list = getCodes().filter((c) => c !== clean);
  try { wx.setStorageSync(CODES_KEY, list); } catch (e) {}
}

module.exports = {
  createInvite,
  fetchInvites,
  answerInvite,
  normalizeCode,
  getCodes,
  rememberCode,
  forgetCode
};
