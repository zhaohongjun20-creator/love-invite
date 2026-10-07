// pages/lovecard/lovecard.js —— 约会清单 + 分享卡片
const app = getApp();
const character = require('../../utils/character.js');

const CARD_W = 750;
const CARD_H = 1080;

Page({
  data: {
    plan: null,
    charSet: 'girl',
    countText: '',
    cardImg: ''
  },

  onLoad() {
    const plan = wx.getStorageSync('love_date_plan') || app.globalData.plan || null;
    this.setData({ plan, countText: this.buildCountText(plan), charSet: character.currentKey() });
  },

  buildCountText(plan) {
    if (!plan || !plan.date) return '';
    const target = new Date(plan.date.replace(/-/g, '/') + ' 00:00:00');
    if (isNaN(target.getTime())) return '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((target - today) / 86400000);
    if (days > 1) return `距离约会还有 ${days} 天 💓`;
    if (days === 1) return '就是明天！💗';
    if (days === 0) return '就是今天！💘';
    return `已经 ${-days} 天前啦 🌸`;
  },

  win() {
    try { if (wx.getWindowInfo) return wx.getWindowInfo(); } catch (e) {}
    try { return wx.getSystemInfoSync(); } catch (e) {}
    return { pixelRatio: 2 };
  },

  // ---------------- 生成卡片 ----------------
  onMakeCard() {
    if (!this.data.plan) return;
    wx.showLoading({ title: '生成中…', mask: true });

    wx.createSelectorQuery()
      .select('#cardCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const node = res && res[0] && res[0].node;
        if (!node) {
          wx.hideLoading();
          wx.showToast({ title: '生成失败，请重试', icon: 'none' });
          return;
        }
        try {
          const canvas = node;
          const ctx = canvas.getContext('2d');
          const dpr = Math.min(this.win().pixelRatio || 2, 3);
          canvas.width = CARD_W * dpr;
          canvas.height = CARD_H * dpr;
          ctx.scale(dpr, dpr);

          const plan = this.data.plan;
          const countText = this.data.countText;
          let finished = false;

          const finish = (portrait) => {
            if (finished) return;
            finished = true;
            try {
              this.drawCard(ctx, plan, countText, portrait);
              wx.canvasToTempFilePath({
                canvas,
                success: (r) => {
                  wx.hideLoading();
                  this.setData({ cardImg: r.tempFilePath });
                  wx.pageScrollTo({ scrollTop: 9999, duration: 300 });
                },
                fail: () => {
                  wx.hideLoading();
                  wx.showToast({ title: '生成失败，请重试', icon: 'none' });
                }
              });
            } catch (e) {
              wx.hideLoading();
              wx.showToast({ title: '生成失败，请重试', icon: 'none' });
            }
          };

          // 把立绘也画进卡片；万一取不到图，自动退化成无立绘版式，不影响出图
          let portrait = null;
          try {
            portrait = canvas.createImage();
            portrait.onload = () => finish(portrait);
            portrait.onerror = () => finish(null);
            portrait.src = '/assets/char/love.jpg';
          } catch (e) {
            portrait = null;
          }
          setTimeout(() => finish(portrait && portrait.width ? portrait : null), 1500);
        } catch (e) {
          wx.hideLoading();
          wx.showToast({ title: '生成失败，请重试', icon: 'none' });
        }
      });
  },

  drawCard(ctx, plan, countText, portrait) {
    const hasPortrait = !!(portrait && portrait.width && portrait.height);

    // 背景渐变
    const grad = ctx.createLinearGradient(0, 0, CARD_W, CARD_H);
    grad.addColorStop(0, '#ffdde1');
    grad.addColorStop(0.55, '#ffb8c8');
    grad.addColorStop(1, '#ffc9a8');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // 白色圆角卡
    ctx.fillStyle = 'rgba(255,255,255,.95)';
    this.roundRect(ctx, 55, 58, 640, 964, 42);
    ctx.fill();

    // ---- 顶部：立绘 ----
    if (hasPortrait) {
      const pw = 224, ph = 318, px = 375 - pw / 2, py = 96;
      ctx.save();
      this.roundRect(ctx, px, py, pw, ph, 30);
      ctx.clip();
      // cover 铺满，不变形
      const s = Math.max(pw / portrait.width, ph / portrait.height);
      const dw = portrait.width * s, dh = portrait.height * s;
      ctx.drawImage(portrait, px + (pw - dw) / 2, py + (ph - dh) / 2, dw, dh);
      ctx.restore();
      // 白色描边
      ctx.strokeStyle = 'rgba(255,255,255,.96)';
      ctx.lineWidth = 8;
      this.roundRect(ctx, px + 4, py + 4, pw - 8, ph - 8, 26);
      ctx.stroke();
      // 两侧小爱心
      ctx.textAlign = 'center';
      ctx.font = '30px sans-serif';
      ctx.fillStyle = '#ff9db4';
      ctx.fillText('💗', px - 34, py + 40);
      ctx.fillText('💗', px + pw + 34, py + ph - 26);
    } else {
      ctx.textAlign = 'center';
      ctx.font = '76px sans-serif';
      ctx.fillText('💌', 375, 250);
    }

    // ---- 标题 ----
    const titleY = hasPortrait ? 486 : 430;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#e8556e';
    ctx.font = 'bold 48px sans-serif';
    ctx.fillText('约会确认书', 375, titleY);

    ctx.fillStyle = '#9a8d95';
    ctx.font = '25px sans-serif';
    ctx.fillText('已由本人郑重勾选 ♥', 375, titleY + 42);

    // 分割线
    ctx.strokeStyle = '#ffdce6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(120, titleY + 80);
    ctx.lineTo(630, titleY + 80);
    ctx.stroke();

    // ---- 两列信息网格 ----
    const cells = [
      ['🕐 时间', plan.time],
      ['📍 地点', plan.place],
      ['💫 做什么', plan.act],
      ['💌 备注', plan.note]
    ];
    const colX = [112, 402];
    const y0 = titleY + 142;
    let gridBottom = 0;
    cells.forEach((cell, i) => {
      const x = colX[i % 2];
      const y = y0 + Math.floor(i / 2) * 128;
      ctx.textAlign = 'left';
      ctx.fillStyle = '#b9a3ad';
      ctx.font = '25px sans-serif';
      ctx.fillText(cell[0], x, y);
      ctx.fillStyle = '#c2185b';
      ctx.font = 'bold 29px sans-serif';
      const after = this.wrapText(ctx, String(cell[1] || '—'), x, y + 42, 266, 38);
      if (after > gridBottom) gridBottom = after;
    });

    // ---- 倒计时小标签：贴在信息区下方；放不下就不画，避免压到文字 ----
    if (countText) {
      ctx.textAlign = 'center';
      ctx.font = '25px sans-serif';
      const tw = ctx.measureText(countText).width;
      const bw = tw + 62;
      const by = gridBottom + 22;
      if (by + 52 < 936) {
        ctx.fillStyle = '#ffe3ec';
        this.roundRect(ctx, 375 - bw / 2, by, bw, 52, 26);
        ctx.fill();
        ctx.fillStyle = '#e8556e';
        ctx.fillText(countText, 375, by + 35);
      }
    }

    // 页脚
    ctx.textAlign = 'center';
    ctx.fillStyle = '#b0395c';
    ctx.font = '27px sans-serif';
    ctx.fillText('— 来自那个想和你约会的人 💘', 375, 972);
  },

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const chars = String(text).split('');
    let line = '';
    let yy = y;
    for (let i = 0; i < chars.length; i++) {
      const test = line + chars[i];
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, yy);
        line = chars[i];
        yy += lineHeight;
      } else {
        line = test;
      }
    }
    if (line) {
      ctx.fillText(line, x, yy);
      yy += lineHeight;
    }
    return yy - lineHeight + 6;
  },

  roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  },

  // ---------------- 保存 / 复制 ----------------
  onSaveCard() {
    if (!this.data.cardImg) {
      wx.showToast({ title: '先点上方生成卡片', icon: 'none' });
      return;
    }
    wx.saveImageToPhotosAlbum({
      filePath: this.data.cardImg,
      success: () => wx.showToast({ title: '已保存到相册 💘' }),
      fail: (err) => {
        const msg = String((err && err.errMsg) || '');
        if (msg.indexOf('auth deny') > -1 || msg.indexOf('authorize') > -1 || msg.indexOf('auth denied') > -1) {
          wx.showModal({
            title: '需要相册权限',
            content: '请在设置中允许「保存到相册」，才能把卡片存下来',
            confirmText: '去设置',
            success: (r) => { if (r.confirm) wx.openSetting(); }
          });
        } else {
          wx.showToast({ title: '保存失败，可长按图片保存', icon: 'none' });
        }
      }
    });
  },

  onCopy() {
    const p = this.data.plan;
    if (!p) return;
    const text =
      '【约会确认书 ♥】\n' +
      `时间：${p.time}\n` +
      `地点：${p.place}\n` +
      `做什么：${p.act}\n` +
      `备注：${p.note}\n` +
      '—— 已由本人郑重勾选，答应的事不许反悔哦 💌';
    wx.setClipboardData({
      data: text,
      success: () => wx.showToast({ title: '已复制，去粘贴发回去吧 💘', icon: 'none' })
    });
  },

  onReset() {
    wx.showModal({
      title: '重新定一次？',
      content: '会把当前的约会清单覆盖掉哦',
      success: (r) => {
        if (r.confirm) {
          app.clearPlan();
          wx.redirectTo({ url: '/pages/invite/invite' });
        }
      }
    });
  },

  onGoInvite() {
    wx.redirectTo({ url: '/pages/invite/invite' });
  },

  onShareAppMessage() {
    const p = this.data.plan;
    return {
      title: p ? `和我约会吧！${p.time} · ${p.place}` : '约会小软件 · 和我约会吧 💌',
      path: '/pages/index/index'
    };
  },

  onShareTimeline() {
    const p = this.data.plan;
    return { title: p ? `约会确认书：${p.time} · ${p.place} · ${p.act}` : '约会小软件' };
  }
});
