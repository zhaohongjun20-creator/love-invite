/**
 * 云服务公开配置
 *
 * 这两个值是云服务开通时下发的 publicConfig，是唯一可以放进前端代码的凭证：
 * - endpoint      云服务数据面地址
 * - publishableKey 标识「哪个应用」，本身不带任何权限（服务端按 Origin / 小程序 appid 校验）
 *
 * 不要在这里放任何长期密钥；底层环境 id 与服务商密钥只存在于服务端。
 */
module.exports = {
  publicConfig: {
    endpoint: 'https://mp-api.app.workbuddy.host',
    publishableKey: 'wbpk_7a1D5aC53L0q6pHuVxtb3i_MmsYzn1znbqldCNmADn3xEdMlgdd5El1'
  }
};
