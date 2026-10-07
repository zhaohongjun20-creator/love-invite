/**
 * 二次元角色配置 —— 形象方案的「一个开关」
 *
 * 当前：useImage = true，使用 AI 生成的高精度立绘（韩漫 / 条漫风格）
 *   图片位置：assets/char/{normal,shy,happy,excited,love}.jpg
 *   规格：720×1021，约 190KB/张，5 张合计约 950KB（符合小程序主包 2MB 限制）
 *   源图（1024×1536、未裁水印）保留在 assets/raw/，已在 project.config.json
 *   与 .gitignore 中排除，不进包体。
 *
 * 想退回纯 WXSS 矢量形象：把 useImage 改成 false 即可，页面代码无需改动。
 *
 * 表情取值：normal（平常）shy（害羞）happy（开心）excited（激动）love（心动）
 */
module.exports = {
  name: '小桃',
  useImage: true,
  images: {
    normal:  '/assets/char/normal.jpg',
    shy:     '/assets/char/shy.jpg',
    happy:   '/assets/char/happy.jpg',
    excited: '/assets/char/excited.jpg',
    love:    '/assets/char/love.jpg'
  }
};
