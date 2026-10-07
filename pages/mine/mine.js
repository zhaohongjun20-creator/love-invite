// pages/mine/mine.js —— 我发起的邀请 & 对方回复
const { fetchInvites, getCodes, forgetCode } = require('../../utils/invite.js');

Page({
  data: {
    list: [],
    loading: true,
    error: '',
    hasCodes: false
  },

  onShow() {
    this.load();
  },

  async load() {
    const codes = getCodes();
    if (!codes.length) {
      this.setData({ list: [], loading: false, error: '', hasCodes: false });
      return;
    }
    this.setData({ loading: true, error: '', hasCodes: true });
    try {
      const rows = await fetchInvites(codes);
      const list = rows.map((r) => ({
        code: r.code,
        time: r.time_text || '时间待定',
        place: r.place || '地点待定',
        act: r.act || '',
        answered: !!r.answered_at,
        answer: r.answer || '',
        reply: r.reply || '',
        message: r.message || '',
        created: this.formatTime(r.created_at)
      }));
      // 已回复的排前面
      list.sort((a, b) => (b.answered ? 1 : 0) - (a.answered ? 1 : 0));
      this.setData({ list, loading: false });
    } catch (e) {
      this.setData({ loading: false, error: e.message || '读取失败，稍后再试' });
    }
  },

  formatTime(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return '';
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getMonth() + 1}/${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  },

  onRefresh() {
    this.load();
  },

  onCopy(e) {
    const code = e.currentTarget.dataset.code;
    if (!code) return;
    wx.setClipboardData({
      data: code,
      success: () => wx.showToast({ title: '邀请码已复制', icon: 'none' })
    });
  },

  onDelete(e) {
    const code = e.currentTarget.dataset.code;
    if (!code) return;
    wx.showModal({
      title: '从列表移除？',
      content: `只从你手机上移除 ${code} 这个记录，云端数据不受影响。`,
      confirmText: '移除',
      success: (r) => {
        if (!r.confirm) return;
        forgetCode(code);
        this.load();
      }
    });
  },

  onGoInvite() {
    wx.navigateTo({ url: '/pages/invite/invite' });
  },

  onShareAppMessage() {
    return { title: '有件小事想问你 💌', path: '/pages/index/index' };
  }
});
