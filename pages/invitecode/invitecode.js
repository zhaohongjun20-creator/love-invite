// pages/invitecode/invitecode.js —— 邀请码展示 + 分享
const { rememberCode } = require('../../utils/invite.js');

Page({
  data: {
    code: '',
    plan: null,
    copied: false
  },

  onLoad(query) {
    const code = (query && query.code) || '';
    const plan = wx.getStorageSync('love_date_plan') || null;
    this.setData({ code, plan });
    if (code) rememberCode(code);
  },

  onCopyCode() {
    if (!this.data.code) return;
    wx.setClipboardData({
      data: this.data.code,
      success: () => {
        this.setData({ copied: true });
        wx.showToast({ title: '邀请码已复制', icon: 'none' });
      }
    });
  },

  onCard() {
    wx.navigateTo({ url: '/pages/lovecard/lovecard' });
  },

  onShareAppMessage() {
    const p = this.data.plan;
    const who = (p && p.sender) || '我';
    return {
      title: p
        ? `${who}想约你：${p.time} · ${p.place}`
        : '有件小事想问你 💌',
      path: `/pages/reply/reply?code=${this.data.code}`
    };
  },

  onShareTimeline() {
    return {
      title: '有人想约你出去 💌',
      query: `code=${this.data.code}`
    };
  }
});
