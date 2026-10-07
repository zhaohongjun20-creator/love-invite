// pages/invite/invite.js —— 约会邀请主流程（时间 → 地点 → 干什么）
const app = getApp();
const music = require('../../utils/music.js');
const {
  TIME_OPTIONS, PLACE_OPTIONS, ACT_OPTIONS, LINES, SWEET_WORDS, pickRandom
} = require('../../utils/options.js');

const STEP_MOOD = { 1: 'shy', 2: 'normal', 3: 'excited' };
const MINI_TEXT = { 1: '就这个！', 2: '就这里！', 3: '就这个！' };

Page({
  data: {
    step: 1,
    stepList: [
      { n: 1, label: '时间' },
      { n: 2, label: '地点' },
      { n: 3, label: '干什么' }
    ],
    mood: 'shy',
    line: '',
    picking: false,

    timeOptions: TIME_OPTIONS,
    placeOptions: PLACE_OPTIONS,
    actOptions: ACT_OPTIONS,

    customTime: '',
    customPlace: '',
    customAct: '',

    today: '',
    dateValue: '',
    timeValue: '18:00',

    noText: '再想想…',
    noLeft: 210,
    noTop: 600,
    noScale: 1
  },

  onLoad() {
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    this.picked = { time: '', place: '', act: '', date: '' };
    this.noCount = 0;
    this.setData({
      today,
      line: pickRandom(LINES.step1)
    });
    this.say(LINES.step1);
  },

  onUnload() {
    if (this.noTimer) clearInterval(this.noTimer);
    if (this.talkTimer) clearTimeout(this.talkTimer);
  },

  onShow() {
    this.jumpNo();
    // 躲猫猫：每 3 秒自己挪一次，避免长时间压住某个选项导致点不到
    if (this.noTimer) clearInterval(this.noTimer);
    this.noTimer = setInterval(() => this.jumpNo(), 3000);
  },

  onHide() {
    if (this.noTimer) clearInterval(this.noTimer);
  },

  // ---------------- 工具 ----------------

  // 换个台词 + 显示"说话中"点点
  say(list) {
    this.setData({ line: pickRandom(list), picking: true });
    if (this.talkTimer) clearTimeout(this.talkTimer);
    this.talkTimer = setTimeout(() => this.setData({ picking: false }), 1600);
  },

  win() {
    try { if (wx.getWindowInfo) return wx.getWindowInfo(); } catch (e) {}
    try { return wx.getSystemInfoSync(); } catch (e) {}
    return { windowWidth: 375, windowHeight: 667 };
  },

  // 拒绝按钮随机乱跑
  jumpNo() {
    const { windowWidth: w, windowHeight: h } = this.win();
    const bw = 160, bh = 60, pad = 16;
    const left = pad + Math.random() * Math.max(10, w - bw - pad * 2);
    const top = 150 + Math.random() * Math.max(10, h - bh - 300);
    this.setData({ noLeft: Math.round(left), noTop: Math.round(top) });
  },

  goStep(n) {
    this.setData({ step: n, mood: STEP_MOOD[n] || 'normal' });
    this.say(LINES['step' + n] || []);
    this.jumpNo();
  },

  // ---------------- 交互 ----------------

  onAnyTap() {
    if (!music.supported) music.start();
  },

  onPick(e) {
    const v = e.currentTarget.dataset.v;
    const step = this.data.step;
    if (step === 1) {
      this.picked.time = v;
      this.picked.date = '';
      this.goStep(2);
    } else if (step === 2) {
      this.picked.place = v;
      this.goStep(3);
    } else {
      this.picked.act = v;
      this.finish();
    }
  },

  onCustomInput(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ [key]: e.detail.value });
  },

  onCustomConfirm() {
    const step = this.data.step;
    const fb = {
      1: '你定的时间（记得告诉我呀）',
      2: '你定的地方（等你发位置）',
      3: '你想干的都行（快告诉我）'
    }[step];
    const val = {
      1: this.data.customTime,
      2: this.data.customPlace,
      3: this.data.customAct
    }[step];
    const text = (val || '').trim() || fb;

    if (step === 1) { this.picked.time = text; this.picked.date = ''; this.goStep(2); }
    else if (step === 2) { this.picked.place = text; this.goStep(3); }
    else { this.picked.act = text; this.finish(); }
  },

  onDateChange(e) {
    this.setData({ dateValue: e.detail.value });
  },

  onTimeChange(e) {
    this.setData({ timeValue: e.detail.value });
  },

  onDateSubmit() {
    if (!this.data.dateValue) {
      wx.showToast({ title: '先选个日期吧～', icon: 'none' });
      return;
    }
    this.picked.date = this.data.dateValue;
    this.picked.time = `${this.data.dateValue} ${this.data.timeValue}`;
    this.goStep(2);
  },

  onBack() {
    if (this.data.step > 1) this.goStep(this.data.step - 1);
  },

  onNoTap() {
    const texts = LINES.reject;
    this.noCount = (this.noCount + 1) % texts.length;
    const scale = Math.max(0.5, 1 - this.noCount * 0.06);
    this.setData({
      noText: texts[this.noCount],
      noScale: this.noCount >= 8 ? 1 : Number(scale.toFixed(2))
    });
    this.setData({ mood: 'shy' });
    this.jumpNo();
  },

  // ---------------- 收尾 ----------------

  finish() {
    const plan = {
      time: this.picked.time,
      place: this.picked.place,
      act: this.picked.act,
      date: this.picked.date || '',
      note: pickRandom(SWEET_WORDS),
      charName: app.globalData.charName,
      createdAt: Date.now()
    };
    app.savePlan(plan);
    this.notifySender(plan);
    this.setData({ mood: 'love' });
    setTimeout(() => {
      wx.redirectTo({ url: '/pages/lovecard/lovecard' });
    }, 420);
  },

  /**
   * 可选：对方选完自动微信推送给你
   * 用法：在 app.js 的 globalData.notifyKey 填入 Server酱 SendKey（sct.ftqq.com 免费领）
   * 注意：小程序需在「开发管理 → 服务器域名 → request 合法域名」添加 https://sctapi.ftqq.com
   */
  notifySender(plan) {
    const key = app.globalData.notifyKey;
    if (!key) return;
    wx.request({
      url: `https://sctapi.ftqq.com/${key}.send`,
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        title: '💌 约会邀请有回复啦',
        desp: `💘 对方选好啦！\n\n🕐 时间：${plan.time}\n📍 地点：${plan.place}\n💫 做什么：${plan.act}\n\n快去准备吧，不许迟到 💌`
      },
      fail: () => {}
    });
  },

  onShareAppMessage() {
    return { title: '有件小事想问你…💌', path: '/pages/index/index' };
  }
});
