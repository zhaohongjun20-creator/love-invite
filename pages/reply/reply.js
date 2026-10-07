// pages/reply/reply.js —— 凭邀请码查看并答复
const { fetchInvites, answerInvite, normalizeCode } = require('../../utils/invite.js');
const character = require('../../utils/character.js');

Page({
  data: {
    stage: 'input',           // input | view | done
    code: '',
    charSet: 'girl',
    invite: null,
    answers: ['🥰 我答应！', '🕐 想改个时间', '📍 换个地方好不好'],
    answer: '🥰 我答应！',
    reply: '',
    message: '',
    loading: false,
    error: ''
  },

  onLoad(query) {
    this.setData({ charSet: character.currentKey() });
    // 从分享卡片进来会带上 code
    const code = normalizeCode(query && query.code);
    if (code && code.length >= 4) {
      this.setData({ code });
      this.onLoadInvite();
    }
  },

  onCodeInput(e) {
    this.setData({ code: normalizeCode(e.detail.value), error: '' });
  },

  async onLoadInvite() {
    const code = normalizeCode(this.data.code);
    if (code.length < 4) {
      this.setData({ error: '邀请码是 6 位字母数字哦' });
      return;
    }
    this.setData({ loading: true, error: '' });
    try {
      const list = await fetchInvites([code]);
      if (!list.length) {
        this.setData({ loading: false, error: '没找到这条邀请，检查一下邀请码是不是抄错了' });
        return;
      }
      this.setData({ loading: false, stage: 'view', invite: list[0], code });
    } catch (e) {
      this.setData({ loading: false, error: e.message || '网络不太顺，稍后再试' });
    }
  },

  onPickAnswer(e) {
    this.setData({ answer: e.currentTarget.dataset.v });
  },

  onReplyInput(e) {
    this.setData({ reply: e.detail.value });
  },

  onMessageInput(e) {
    this.setData({ message: e.detail.value });
  },

  async onSubmit() {
    if (this.data.loading) return;
    this.setData({ loading: true, error: '' });
    try {
      const row = await answerInvite({
        code: this.data.code,
        answer: this.data.answer,
        reply: this.data.reply,
        message: this.data.message
      });
      this.setData({ loading: false, stage: 'done', invite: row });
    } catch (e) {
      this.setData({ loading: false, error: e.message || '发送失败，再试一次' });
    }
  },

  onHome() {
    wx.reLaunch({ url: '/pages/index/index' });
  },

  onShareAppMessage() {
    return { title: '有人想约你出去 💌', path: '/pages/index/index' };
  }
});
