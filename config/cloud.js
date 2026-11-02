/**
 * 云开发配置（1.1.0 起从 WorkBuddy HTTP 接口迁移到微信云开发）
 *
 * - cloudEnv  云开发环境 ID：开通云开发后，在「云开发控制台 → 设置」里复制到这里。
 *             留空 = 自动使用账号下的默认环境。
 * - 云函数通过 wx.cloud.callFunction 调用，不走 request 合法域名，
 *   无需在微信公众平台配置任何服务器域名，也不依赖域名的 ICP 备案。
 *
 * 旧的 WorkBuddy endpoint / publishableKey 已废弃，不再放进前端代码。
 */
module.exports = {
  cloudEnv: ''
};
