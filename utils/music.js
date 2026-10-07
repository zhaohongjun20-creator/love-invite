/**
 * utils/music.js —— 浪漫·激情版背景音乐（现场合成，零版权、零音频文件）
 *
 * 编曲思路（相比最初的八音盒小调）：
 *  - 调性从 A 小调换成 **F 大调**，和声走 Dm → Bb → F → C 这类情感向进行，
 *    并给和弦加七度/九度，听起来更暖、更"心动"
 *  - 拆成四层：低音推进 + 长音和弦垫 + 八分音符琶音 + 主旋律
 *  - 112 BPM（原来 2 秒一小节 ≈ 60 BPM），速度翻倍，切分与后半拍制造推动感
 *  - 8 小节一个循环，带 **渐强**，第 4、5 小节到高潮（F5 是最高音）
 *  - 高音铃铛点缀保留原八音盒音色，负责"浪漫"的那层光泽
 *
 * 用小程序 WebAudioContext（基础库 2.19.0+）；不支持的环境静默降级，不影响功能。
 */

// ---------------- 音高 ----------------
const SEMI = { C: 0, 'C#': 1, D: 2, 'D#': 3, E: 4, F: 5, 'F#': 6, G: 7, 'G#': 8, A: 9, 'A#': 10, B: 11 };
const FREQ = {};

function f(name) {
  if (FREQ[name]) return FREQ[name];
  const m = /^([A-G]#?)(\d)$/.exec(name);
  if (!m) return 440;
  const midi = (parseInt(m[2], 10) + 1) * 12 + SEMI[m[1]];
  FREQ[name] = 440 * Math.pow(2, (midi - 69) / 12);
  return FREQ[name];
}

// ---------------- 速度与和声 ----------------
const BPM = 112;
const BEAT = 60 / BPM;      // 一拍 ≈ 0.536s
const BAR = BEAT * 4;       // 一小节 ≈ 2.143s

// 一小节 = { 低音, 和弦垫(带七/九度), 八分音符琶音, 主旋律[音, 第几拍进, 持续几拍] }
const BARS = [
  { bass: 'F2',  pad: ['F3', 'A3', 'C4', 'E4'],  arp: ['F3', 'A3', 'C4', 'E4', 'F4', 'E4', 'C4', 'A3'],  mel: [['A4', 0, 2], ['C5', 2, 2]] },
  { bass: 'C3',  pad: ['C3', 'E3', 'G3', 'B3'],  arp: ['C4', 'E4', 'G4', 'B4', 'C5', 'B4', 'G4', 'E4'],  mel: [['B4', 0, 1], ['C5', 1, 1], ['D5', 2, 2]] },
  { bass: 'D3',  pad: ['D3', 'F3', 'A3', 'C4'],  arp: ['D4', 'F4', 'A4', 'C5', 'D5', 'C5', 'A4', 'F4'],  mel: [['D5', 0, 2], ['A4', 2, 2]] },
  { bass: 'A#2', pad: ['A#2', 'D3', 'F3', 'A3'], arp: ['A#3', 'D4', 'F4', 'A4', 'A#4', 'A4', 'F4', 'D4'], mel: [['C5', 0, 1.5], ['D5', 1.5, 0.5], ['F5', 2, 2]] },
  { bass: 'F2',  pad: ['F3', 'A3', 'C4', 'E4'],  arp: ['F3', 'C4', 'F4', 'A4', 'C5', 'A4', 'F4', 'C4'],  mel: [['E5', 0, 2], ['C5', 2, 2]] },
  { bass: 'A2',  pad: ['A2', 'C3', 'E3', 'G3'],  arp: ['A3', 'C4', 'E4', 'G4', 'A4', 'G4', 'E4', 'C4'],  mel: [['A4', 0, 1], ['C5', 1, 1], ['E5', 2, 2]] },
  { bass: 'A#2', pad: ['A#2', 'D3', 'F3', 'A3'], arp: ['A#3', 'F4', 'A#4', 'D5', 'F5', 'D5', 'A#4', 'F4'], mel: [['D5', 0, 2], ['C5', 2, 2]] },
  { bass: 'C3',  pad: ['C3', 'E3', 'G3', 'A#3'], arp: ['C4', 'G4', 'C5', 'E5', 'G5', 'E5', 'C5', 'G4'],  mel: [['B4', 0, 2], ['C5', 2, 2]] }
];

// ---------------- WebAudio 状态 ----------------
let ctx = null;
let master = null;
let timer = null;
let barIndex = 0;
let nextBarTime = 0;
let muted = false;
let started = false;
const baseVolume = 0.5;
const LOOKAHEAD = 1.2;      // 提前调度这么多秒
const TICK_MS = 300;

function setParam(param, value, when) {
  if (!param) return;
  try {
    if (typeof param.setValueAtTime === 'function') param.setValueAtTime(value, when);
    else param.value = value;
  } catch (e) {
    try { param.value = value; } catch (e2) {}
  }
}

function ramp(param, value, when) {
  if (!param) return;
  try {
    if (typeof param.linearRampToValueAtTime === 'function') {
      param.linearRampToValueAtTime(value, when);
      return;
    }
  } catch (e) {}
  try { param.value = value; } catch (e2) {}
}

function decay(param, value, when) {
  if (!param) return;
  try {
    if (typeof param.exponentialRampToValueAtTime === 'function') {
      param.exponentialRampToValueAtTime(value, when);
      return;
    }
  } catch (e) {}
  try { param.value = value; } catch (e2) {}
}

/** 一个音的通用发声：振荡器 + 音量包络 */
function tone(hz, when, dur, vol, type, atk, rel) {
  if (!ctx || !master || !hz) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = hz;
    osc.connect(gain);
    gain.connect(master);

    setParam(gain.gain, 0, when);
    ramp(gain.gain, vol, when + (atk || 0.01));
    if (rel === 'lin') ramp(gain.gain, 0.0001, when + dur);
    else decay(gain.gain, 0.0001, when + dur);

    osc.start(when);
    osc.stop(when + dur + 0.08);
  } catch (e) {}
}

/** 排一小节：四层编曲 + 渐强 */
function scheduleBar(t0, index) {
  const bar = BARS[index % BARS.length];
  // 渐强：循环开头收一点，到第 4~5 小节推上去
  const dyn = 0.72 + 0.46 * ((index % BARS.length) / (BARS.length - 1));

  // 1) 低音：1 拍、3 拍落根音，第 4 拍后半拍推一下进下一小节
  tone(f(bar.bass), t0, BEAT * 1.5, 0.30 * dyn, 'sine', 0.012);
  tone(f(bar.bass), t0 + BEAT * 2, BEAT * 1.5, 0.26 * dyn, 'sine', 0.012);
  tone(f(bar.bass), t0 + BEAT * 3.5, BEAT * 0.5, 0.17 * dyn, 'triangle', 0.008);

  // 2) 和弦垫：整小节长音，慢起慢收，负责"暖"
  for (let i = 0; i < bar.pad.length; i++) {
    tone(f(bar.pad[i]), t0, BAR * 0.96, 0.050 * dyn, 'triangle', 0.35, 'lin');
  }

  // 3) 琶音：八分音符上下走动，负责"推"
  for (let i = 0; i < bar.arp.length; i++) {
    const at = t0 + i * (BEAT / 2);
    tone(f(bar.arp[i]), at, BEAT * 0.85, 0.105 * dyn, 'triangle', 0.005);
    tone(f(bar.arp[i]) * 2, at, BEAT * 0.40, 0.022 * dyn, 'sine', 0.004);
  }

  // 4) 主旋律：长音为主，加三倍频泛音提亮
  for (let i = 0; i < bar.mel.length; i++) {
    const note = bar.mel[i];
    const at = t0 + note[1] * BEAT;
    const dur = note[2] * BEAT * 1.02;
    tone(f(note[0]), at, dur, 0.155 * dyn, 'sine', 0.045);
    tone(f(note[0]) * 3, at, dur * 0.5, 0.030 * dyn, 'sine', 0.030);
  }

  // 5) 高音铃铛点缀：第 1、5 小节各加一串（原八音盒音色，浪漫的光泽）
  const bi = index % BARS.length;
  if (bi === 0 || bi === 4) {
    const bells = bi === 0 ? ['F5', 'A5', 'C6', 'F6'] : ['C6', 'A5', 'F5', 'C6'];
    for (let i = 0; i < bells.length; i++) {
      tone(f(bells[i]), t0 + i * (BEAT / 2), 1.3, 0.055 * dyn, 'sine', 0.006);
      tone(f(bells[i]) * 3, t0 + i * (BEAT / 2), 0.5, 0.012 * dyn, 'sine', 0.006);
    }
  }
}

/** 提前调度：每 300ms 检查一次，保证音符按 ctx.currentTime 精确落点 */
function tick() {
  if (!ctx || muted) return;
  try {
    const now = ctx.currentTime;
    let guard = 0;
    while (nextBarTime < now + LOOKAHEAD && guard++ < 2) {
      const t0 = Math.max(nextBarTime, now + 0.06);
      scheduleBar(t0, barIndex);
      nextBarTime = t0 + BAR;
      barIndex += 1;
    }
  } catch (e) {}
}

const music = {
  get muted() { return muted; },
  get supported() { return !!ctx; },

  /** 首次用户交互后调用；返回是否启动成功 */
  start() {
    if (started) return true;
    started = true;
    try {
      if (typeof wx.createWebAudioContext !== 'function') return false;
      ctx = wx.createWebAudioContext();
      master = ctx.createGain();
      try { master.gain.value = muted ? 0 : baseVolume; } catch (e) {}
      master.connect(ctx.destination);
      if (typeof ctx.resume === 'function') ctx.resume();

      nextBarTime = ctx.currentTime + 0.1;
      barIndex = 0;
      tick();
      if (timer) clearInterval(timer);
      timer = setInterval(tick, TICK_MS);
      return true;
    } catch (e) {
      ctx = null; master = null; timer = null;
      return false;
    }
  },

  /** 切换静音，返回切换后的状态 */
  toggle() {
    muted = !muted;
    try { if (master) master.gain.value = muted ? 0 : baseVolume; } catch (e) {}
    if (!muted && started && ctx) {
      // 取消静音后重新对齐时间，避免把静音期间的小节一次性补出来
      nextBarTime = ctx.currentTime + 0.1;
      tick();
    }
    if (!muted && !started) this.start();
    return muted;
  },

  stop() {
    if (timer) { clearInterval(timer); timer = null; }
    try { if (ctx && ctx.close) ctx.close(); } catch (e) {}
    ctx = null; master = null; started = false; barIndex = 0; nextBarTime = 0;
  }
};

module.exports = music;
