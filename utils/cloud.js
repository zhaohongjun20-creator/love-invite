// utils/cloud.js —— 云服务客户端（整个应用只初始化一次）
const { createMiniProgramWorkBuddyCloud } = require('@tencent-ai/workbuddy-cloud-sdk/miniprogram');
const { createDiagnosticWx } = require('./workbuddy-cloud-diagnostics');
const { publicConfig } = require('../config/cloud.js');

// 注意：小程序没有 location.origin，endpoint 必须显式传入，两个值都来自 publicConfig
const cloud = createMiniProgramWorkBuddyCloud({
  endpoint: publicConfig.endpoint,
  publishableKey: publicConfig.publishableKey,
  wx: createDiagnosticWx(wx)
});

module.exports = { cloud };
