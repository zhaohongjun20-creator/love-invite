// utils/dodge.js —— 「躲猫猫」拒绝按钮，封面和邀请页共用
//
// 小程序没有 mouseenter，只靠 tap 的话按钮可能长期压住某个选项，
// 所以除了点击时躲，还有每 3 秒自动挪一次。

const TEXTS = [
  '再想想…',
  '再考虑一下嘛 🥺',
  '求求你了答应我好吗 🙏',
  '不要，我就要和你约会 💢',
  '你忍心点我这么多次吗 😢',
  '这个按钮坏掉了不管用 😤',
  '有本事你再点一次呀 👀',
  '好吧其实你答应了对吧 😏',
  '爱你哟，就当答应了 💘'
];

function win() {
  try { if (wx.getWindowInfo) return wx.getWindowInfo(); } catch (e) {}
  try { return wx.getSystemInfoSync(); } catch (e) {}
  return { windowWidth: 375, windowHeight: 667 };
}

/** 塞进 Page.data 的初始值 */
function initialState() {
  return { noText: TEXTS[0], noLeft: 210, noTop: 600, noScale: 1 };
}

function jump(page) {
  const { windowWidth: w, windowHeight: h } = win();
  const bw = 160, bh = 60, pad = 16;
  const left = pad + Math.random() * Math.max(10, w - bw - pad * 2);
  const top = 150 + Math.random() * Math.max(10, h - bh - 300);
  page.setData({ noLeft: Math.round(left), noTop: Math.round(top) });
}

function tap(page) {
  page._noCount = ((page._noCount || 0) + 1) % TEXTS.length;
  const scale = Math.max(0.5, 1 - page._noCount * 0.06);
  page.setData({
    noText: TEXTS[page._noCount],
    noScale: page._noCount >= 8 ? 1 : Number(scale.toFixed(2))
  });
  jump(page);
}

function startAuto(page) {
  stopAuto(page);
  page._noTimer = setInterval(() => jump(page), 3000);
}

function stopAuto(page) {
  if (page._noTimer) {
    clearInterval(page._noTimer);
    page._noTimer = null;
  }
}

module.exports = { TEXTS, initialState, jump, tap, startAuto, stopAuto };
