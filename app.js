// app.js —— 约会小软件 · 二次元版
const STORAGE_KEY = 'love_date_plan';

App({
  globalData: {
    plan: null,           // 当前约会计划 { time, place, act, note, date, createdAt }
    charName: '小桃'      // 二次元角色昵称
  },

  onLaunch() {
    // 恢复上一次的约会计划（用于封面倒计时）
    try {
      const plan = wx.getStorageSync(STORAGE_KEY);
      if (plan) this.globalData.plan = plan;
    } catch (e) {}
  },

  savePlan(plan) {
    this.globalData.plan = plan;
    try { wx.setStorageSync(STORAGE_KEY, plan); } catch (e) {}
  },

  clearPlan() {
    this.globalData.plan = null;
    try { wx.removeStorageSync(STORAGE_KEY); } catch (e) {}
  }
});
