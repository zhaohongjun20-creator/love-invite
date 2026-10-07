// pages/index/index.js —— 封面
const app = getApp();
const music = require('../../utils/music.js');
const { LINES, pickRandom } = require('../../utils/options.js');

Page({
  data: {
    charName: '小桃',
    mood: 'happy',
    line: '',
    plan: null,
    countText: '',
    musicIcon: '🎵',
    hearts: []
  },

  onLoad() {
    this.setData({
      line: pickRandom(LINES.cover),
      hearts: this.makeHearts()
    });
  },

  onShow() {
    const plan = wx.getStorageSync('love_date_plan') || null;
    this.setData({
      plan,
      countText: this.buildCountText(plan),
      musicIcon: music.muted ? '🔇' : '🎵'
    });
  },

  onUnload() {
    if (this.heartTimer) clearInterval(this.heartTimer);
  },

  makeHearts() {
    const chars = ['💖', '💗', '💓', '💘', '💕', '🌸'];
    const list = [];
    for (let i = 0; i < 14; i++) {
      list.push({
        id: i,
        char: chars[i % chars.length],
        left: Math.round(Math.random() * 96) + '%',
        size: 22 + Math.round(Math.random() * 26),
        dur: (5 + Math.random() * 5).toFixed(1),
        delay: (Math.random() * 6).toFixed(1)
      });
    }
    return list;
  },

  buildCountText(plan) {
    if (!plan || !plan.date) return '';
    const target = new Date(plan.date.replace(/-/g, '/') + ' 00:00:00');
    if (isNaN(target.getTime())) return '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((target - today) / 86400000);
    if (days > 1) return `还有 ${days} 天 💓`;
    if (days === 1) return '就是明天！💗';
    if (days === 0) return '就是今天！💘';
    return `已经 ${-days} 天前啦 🌸`;
  },

  // 首次任意点击 → 启动八音盒 BGM
  onTapAnywhere() {
    if (!music.supported) music.start();
  },

  onChangeLine() {
    this.setData({ line: pickRandom(LINES.cover) });
    const moods = ['happy', 'shy', 'excited', 'love'];
    this.setData({ mood: moods[Math.floor(Math.random() * moods.length)] });
  },

  onToggleMusic() {
    const muted = music.toggle();
    this.setData({ musicIcon: muted ? '🔇' : '🎵' });
  },

  onStart() {
    if (!music.supported) music.start();
    wx.navigateTo({ url: '/pages/invite/invite' });
  },

  onViewLast() {
    if (!this.data.plan) return;
    wx.navigateTo({ url: '/pages/lovecard/lovecard' });
  },

  onShareAppMessage() {
    return {
      title: '有件小事想问你…💌',
      path: '/pages/index/index'
    };
  },

  onShareTimeline() {
    return { title: '约会小软件 · 和 TA 把这一天定下来' };
  }
});
