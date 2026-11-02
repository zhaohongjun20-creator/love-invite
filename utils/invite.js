// utils/invite.js —— 约会邀请的云端读写 + 本机邀请码簿
// 1.1.0：云端从 WorkBuddy RPC 迁移到微信云开发；云端不可用时自动降级为
// 本机演示模式（同一台手机上全流程可走），保证审核/无云环境时页面不瘫痪。
const { callFunction, cloudReady } = require('./cloud.js');

const CODES_KEY = 'love_my_invite_codes';
const LOCAL_KEY = 'love_local_invites';   // 离线兜底：code -> 邀约行
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 去掉 I/1/O/0 等易混字符
const CLOUD_RETRY_MS = 60 * 1000;         // 云端失联后，每隔一分钟允许重试一次

let cloudDownAt = 0;                      // 上次云端调用失败的时间戳

function rows(data) {
  if (Array.isArray(data)) return data;
  return data ? [data] : [];
}

// 把云端错误翻译成人话；不把原始 rows / 凭证打进日志
function friendlyError(error) {
  if (!error) return '出了点小问题，稍后再试';
  if (error.business && error.message) return error.message; // 云函数给出的业务提示
  return '网络不太顺，检查一下再试';
}

function normalizeCode(input) {
  return String(input || '').replace(/[^0-9a-zA-Z]/g, '').toUpperCase().slice(0, 12);
}

/** 云端当前是否可用（未开通/未部署/刚失败过时为 false，自动重试恢复） */
function cloudOnline() {
  return cloudReady() && (!cloudDownAt || Date.now() - cloudDownAt > CLOUD_RETRY_MS);
}

/** 调云函数：调用层异常 → 标记失联并走兜底；业务失败（ok:false）→ 抛给人话错误 */
async function withCloud(name, payload, fallback) {
  if (cloudOnline()) {
    try {
      const res = await callFunction(name, payload);
      const d = res && res.result;
      if (d && d.ok === false) {
        const err = new Error(d.message || '云端处理失败');
        err.business = true;
        throw err;
      }
      cloudDownAt = 0;
      return d;
    } catch (e) {
      if (e.business) throw e;
      cloudDownAt = Date.now(); // 环境/函数/网络问题 → 本次会话先走离线，稍后自动重试
    }
  }
  return fallback();
}

// ---------------- 离线兜底：本机邀请存储 ----------------

function localAll() {
  try {
    const map = wx.getStorageSync(LOCAL_KEY);
    return map && typeof map === 'object' ? map : {};
  } catch (e) {
    return {};
  }
}

function localSave(map) {
  try { wx.setStorageSync(LOCAL_KEY, map); } catch (e) {}
}

function nowIso() { return new Date().toISOString(); }

function genLocalCode() {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return code;
}

// ---------------- 云端三件套（签名与 1.0.0 完全一致） ----------------

/** 发起邀请：云端生成邀请码，返回 6 位码 */
async function createInvite(payload) {
  const clean = {
    p_sender: String(payload.sender || '').slice(0, 60),
    p_time: String(payload.time || '').slice(0, 200),
    p_place: String(payload.place || '').slice(0, 200),
    p_act: String(payload.act || '').slice(0, 200),
    p_note: String(payload.note || '').slice(0, 300),
    p_date: String(payload.date || '').slice(0, 20)
  };
  return withCloud('date_invite_create', clean, () => {
    // 离线演示模式：本机生成码并存储（换设备不同步，页面上方会照常可走全流程）
    const map = localAll();
    let code = genLocalCode();
    while (map[code]) code = genLocalCode();
    const row = {
      code,
      sender: clean.p_sender,
      time_text: clean.p_time,
      place: clean.p_place,
      act: clean.p_act,
      note: clean.p_note,
      date: clean.p_date,
      answer: '',
      reply: '',
      message: '',
      created_at: nowIso(),
      answered_at: ''
    };
    map[code] = row;
    localSave(map);
    rememberCode(code);
    return code;
  }).then((d) => {
    if (typeof d === 'string') return d; // 兜底路径已返回码
    const row = rows(d && d.data)[0];
    if (!row || !row.code) throw new Error('云端没有返回邀请码，稍后再试');
    rememberCode(row.code);
    return row.code;
  });
}

/** 按邀请码批量读取。接收方传 1 个，发起人传自己的一串 */
async function fetchInvites(codes) {
  const list = (codes || []).map(normalizeCode).filter((c) => c.length >= 4).slice(0, 50);
  if (!list.length) return [];
  return withCloud('date_invite_get', { p_codes: list }, () => {
    const map = localAll();
    return list.map((c) => map[c]).filter(Boolean);
  }).then((d) => (Array.isArray(d) ? d : rows(d && d.data)));
}

/** 答复邀请 */
async function answerInvite({ code, answer, reply, message }) {
  const clean = normalizeCode(code);
  if (clean.length < 4) throw new Error('邀请码不对哦');
  return withCloud('date_invite_answer', {
    p_code: clean,
    p_answer: String(answer || '').slice(0, 40),
    p_reply: String(reply || '').slice(0, 500),
    p_message: String(message || '').slice(0, 300)
  }, () => {
    // 离线演示模式：答复只落在本机
    const map = localAll();
    const row = map[clean];
    if (!row) throw new Error('没找到这条邀请，邀请码是不是抄错了？');
    row.answer = String(answer || '').slice(0, 40);
    row.reply = String(reply || '').slice(0, 500);
    row.message = String(message || '').slice(0, 300);
    row.answered_at = nowIso();
    map[clean] = row;
    localSave(map);
    return row;
  }).then((d) => {
    if (d && d.code) return d; // 兜底路径已返回行
    const row = rows(d && d.data)[0];
    if (!row) throw new Error('没找到这条邀请，邀请码是不是抄错了？');
    return row;
  });
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
  forgetCode,
  cloudOnline
};
