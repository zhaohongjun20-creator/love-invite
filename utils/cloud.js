// utils/cloud.js —— 微信云开发调用层（整个应用只初始化一次）
// 1.1.0 起替代原 WorkBuddy HTTP 接口：云函数不走 request 合法域名，无备案/白名单门槛。
const { cloudEnv } = require('../config/cloud.js');

let inited = false;

/** 基础库是否支持云开发（低于 2.2.3 的环境会走离线兜底） */
function cloudReady() {
  return typeof wx !== 'undefined' && !!wx.cloud;
}

/** 初始化云开发；幂等，失败不抛错（页面各自有离线兜底） */
function init() {
  if (inited || !cloudReady()) return;
  try {
    const opts = { traceUser: true };
    if (cloudEnv) opts.env = cloudEnv;
    wx.cloud.init(opts);
    inited = true;
  } catch (e) {
    // 环境不存在等情况：保持未初始化，invite.js 会自动降级为本地模式
  }
}

/**
 * 调用云函数。只把「调用层异常」（环境未开通 / 函数未部署 / 网络失败）抛出去，
 * 业务失败由云函数以 { ok: false, code, message } 正常返回，由调用方区分处理。
 */
function callFunction(name, data) {
  init();
  return wx.cloud.callFunction({ name, data });
}

module.exports = { cloudReady, init, callFunction };
