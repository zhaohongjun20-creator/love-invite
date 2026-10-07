// pages/invite/invite.js —— 约会邀请主流程（时间 → 地点 → 干什么）
const app = getApp();
const music = require('../../utils/music.js');
const { createInvite } = require('../../utils/invite.js');
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
    sender: '',
    sending: false,

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

  onSenderInput(e) {
    this.setData({ sender: e.detail.value });
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

  async finish() {
    if (this.data.sending) return;
    const plan = {
      time: this.picked.time,
      place: this.picked.place,
      act: this.picked.act,
      date: this.picked.date || '',
      note: pickRandom(SWEET_WORDS),
      sender: (this.data.sender || '').trim() || '那个想约你的人',
      charName: app.globalData.charName,
      createdAt: Date.now()
    };
    app.savePlan(plan);
    this.setData({ mood: 'love', sending: true });

    // 存到云端并换一个邀请码，对方凭码就能看到
    try {
      const code = await createInvite(plan);
      wx.redirectTo({ url: '/pages/invitecode/invitecode?code=' + code });
    } catch (e) {
      // 不静默降级：说清楚云端没存上，同时本地的清单卡片照样能用
      this.setData({ sending: false });
      wx.showModal({
        title: '邀请码没生成成功',
        content: (e && e.message ? e.message : '云端暂时连不上') +
          '\n\n先给你本地的约会清单卡片，稍后可以再发一次邀请。',
        showCancel: false,
        confirmText: '看看卡片',
        success: () => wx.redirectTo({ url: '/pages/lovecard/lovecard' })
      });
    }
  },

  onShareAppMessage() {
    return { title: '有件小事想问你…💌', path: '/pages/index/index' };
  }
});
