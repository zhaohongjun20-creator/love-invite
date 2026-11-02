# -*- coding: utf-8 -*-
"""preview.html 丰富化六件套：专属台词/打字机/摸头彩蛋/撒花/确认书主题化/音效/花瓣"""
import sys
sys.stdout.reconfigure(errors="replace")
HTML = r"C:/Users/15804/Documents/love-invite/preview.html"
src = open(HTML, encoding="utf-8").read()

def rep(old, new, must=True, once=True):
    global src
    if old not in src:
        if must: raise SystemExit("锚点未找到: " + old[:60])
        return
    src = src.replace(old, new, 1 if once else -1)

# ============ 1. 六人专属台词库（注入在 LINES 定义后） ============
rep("""const LINES = {""",
"""const CHAR_LINES = {
  girl: {  // 小桃 · 甜美
    cover: ['那个…有件小事想问你 👉👈','我准备了好久，才敢开口…','点进来，就是答应了一半啦～'],
    pet: ['呀、干嘛突然碰我啦 😳','嘿嘿…再摸头发要乱了啦','你手…好暖和 💓'],
    pet5: ['再、再摸就要脸红爆炸了啦！！😳💥']
  },
  girl2: { // 星柠 · 清冷
    cover: ['……哦，是你啊。','有什么事，说吧。（其实猜到了）','约我？……随便你啦。'],
    pet: ['……干嘛。','别闹。……没有讨厌。','（耳朵红了）……看什么看。'],
    pet5: ['……够了哦。（嘴角却翘起来了）']
  },
  girl3: { // 柚茶 · 元气
    cover: ['嘿嘿，我可是准备了三个方案哦！','走走走，这次绝对不许放我鸽子！','今天天气超好，不出门亏大了！'],
    pet: ['哇，充电成功！🔋','哈哈哈哈别挠我！','元气 +100！接下来听我的！'],
    pet5: ['再摸收门票了哦！一次一个奶茶！🧋']
  },
  boy: {   // 小川 · 深邃
    cover: ['时间你来挑。……我都可以。','想了很久，还是想约你。','……嗯，就是你想的那样。'],
    pet: ['……（耳朵红了）','别闹。……继续也可以。','你呀。……真是拿你没办法。'],
    pet5: ['……再这样，我可要牵你手了。']
  },
  boy2: {  // 墨白 · 文艺
    cover: ['想约你去看一场展览，人少的那种。','风很软，适合说这件事。','有些话，写下来比说容易。'],
    pet: ['……书都要拿不稳了。','你总是这样出其不意。','（扶了扶眼镜）……继续？'],
    pet5: ['好了……再摸，这一页就写不下别的了。']
  },
  boy3: {  // 炎阳 · 热血
    cover: ['别磨蹭啦！这周六，我全订好了！','就差你一句话，出发！','赢你要用一生，但约你要趁本周！'],
    pet: ['哈哈，手劲不错嘛！','再来再来，我抗揍！','（耳朵红了）咳、咳咳……'],
    pet5: ['行啊你……再摸我可要把你扛走了！']
  }
};
const LINES = {""")

# ============ 2. 打字机 + 台词函数 ============
rep("""/* ================= 封面 ================= */
function changeLine() {
  $('coverLine').textContent = rnd(LINES.cover);
  setMood('scrCover', rnd(['happy','shy','excited','love']));
}""",
"""/* ================= 打字机 ================= */
function typeLine(el, text, speed) {
  if (el._tw) clearInterval(el._tw);
  el.textContent = '';
  let i = 0;
  el._tw = setInterval(function () {
    i++;
    el.textContent = text.slice(0, i) + (i < text.length ? '▎' : '');
    if (i >= text.length) { clearInterval(el._tw); el._tw = null; }
  }, speed || 28);
}
function lineFor(scope) {
  const set = CHAR_LINES[curSet] || {};
  return rnd((scope && set[scope]) ? set[scope] : LINES[scope] || LINES.cover);
}

/* ================= 封面 ================= */
function changeLine() {
  typeLine($('coverLine'), lineFor('cover'));
  setMood('scrCover', rnd(['happy','shy','excited','love']));
  sfx();
}""")

# step 台词走打字机
rep("  $('inviteLine').textContent = rnd(LINES['step' + step]);",
    "  typeLine($('inviteLine'), lineFor('step' + step));")

# ============ 3. 摸头彩蛋（事件委托） + 花瓣字符 ============
rep("""document.querySelectorAll('[data-char]').forEach(function (el) {
  el.innerHTML = '<div class="frame"><img class="ag-img" src="' + currentImages().normal + '" alt=""></div>';
});""",
"""document.querySelectorAll('[data-char]').forEach(function (el) {
  el.innerHTML = '<div class="frame" title="点我一下试试"><img class="ag-img" src="' + currentImages().normal + '" alt=""></div>';
});
let petCount = 0;
document.getElementById('phone').addEventListener('click', function (ev) {
  if (!ev.target.closest('.frame')) return;
  const scope = (ev.target.closest('[data-char]') || {}).getAttribute;
  const set = CHAR_LINES[curSet] || {};
  petCount++;
  const bank = (petCount >= 5 && set.pet5) ? set.pet5 : (set.pet || ['😳']);
  if (petCount >= 5) petCount = 0;
  const line = rnd(bank);
  setMood('scrCover', rnd(['shy','excited','love']));
  const tip = document.createElement('div');
  tip.textContent = line;
  tip.style.cssText = 'position:absolute;left:50%;top:26%;transform:translateX(-50%);z-index:60;background:#fff;border:2px solid var(--fv-border);border-radius:999px;padding:14px 30px;font-size:26px;color:var(--fv-mid);box-shadow:0 10px 26px rgba(var(--fv-shadow),.2);white-space:nowrap;animation:rise .3s ease-out;max-width:86%;overflow:hidden;text-overflow:ellipsis;';
  $('phone').appendChild(tip);
  setTimeout(function(){ tip.remove(); }, 1600);
  floatEmoji();
  sfx();
});
function floatEmoji() {
  const e = document.createElement('div');
  e.textContent = rnd(['💗','😳','✨','💓']);
  e.style.cssText = 'position:absolute;z-index:59;font-size:34px;pointer-events:none;left:' + (30 + Math.random()*40) + '%;top:30%;animation:floatHeart 1.6s ease-out forwards;';
  $('phone').appendChild(e);
  setTimeout(function(){ e.remove(); }, 1600);
}""")

# 花瓣混入
rep("const chars=['♥'];", "const chars=['♥','❀'];")

# ============ 4. 撒花 + 音效（挂在 BGM 段之前） ============
rep("""/* ================= BGM：F 大调 · 浪漫·激情版（与小程序同一套编曲） ================= */""",
"""/* ================= 撒花 & 音效 ================= */
function confetti() {
  const colors = [null, null]; // 占位防误读
  const t = (CHAR_SETS[curSet] && CHAR_SETS[curSet].theme) || {};
  const palette = [t.accent, t.accent2, t.tint2, '#ffd76b', '#fff'].filter(Boolean);
  for (let i = 0; i < 42; i++) {
    const p = document.createElement('div');
    p.textContent = rnd(['🎉','✨','💗','🎊','⭐']);
    p.style.cssText = 'position:absolute;z-index:70;pointer-events:none;font-size:' + (18 + Math.random()*22) + 'px;' +
      'left:' + (Math.random()*100) + '%;top:-8%;filter:drop-shadow(0 2px 6px ' + (palette[i % palette.length]) + ');' +
      'animation:pconfetti ' + (1.6 + Math.random()*1.2) + 's ease-in forwards;animation-delay:' + (Math.random()*0.4) + 's;';
    $('phone').appendChild(p);
    setTimeout(function(){ p.remove(); }, 3200);
  }
  const st = document.createElement('style');
  st.textContent = '@keyframes pconfetti { to { transform: translateY(' + Math.ceil($('phone').offsetHeight) + 'px) rotate(' + (Math.random()>0.5?'':'-') + '540deg); opacity:.9; } }';
  document.head.appendChild(st);
}
function sfx() {
  try {
    if (!ac || muted) return;
    const o = ac.createOscillator(), gg = ac.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(880, ac.currentTime);
    o.frequency.exponentialRampToValueAtTime(1320, ac.currentTime + 0.07);
    gg.gain.setValueAtTime(0.12, ac.currentTime);
    gg.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.12);
    o.connect(gg); gg.connect(ac.destination);
    o.start(); o.stop(ac.currentTime + 0.13);
  } catch (e) {}
}
/* 选项/切换点击音效（委托） */
document.getElementById('phone').addEventListener('click', function (ev) {
  if (ev.target.closest('.opt, .cs-item, .mini, .btn-main')) sfx();
}, true);

/* ================= BGM：F 大调 · 浪漫·激情版（与小程序同一套编曲） ================= */""")

# noBtn 最后一发撒花
rep("""noBtn.addEventListener('click', () => {
  noCount=(noCount+1)%noTexts.length;
  noBtn.textContent=noTexts[noCount];""",
"""noBtn.addEventListener('click', () => {
  noCount=(noCount+1)%noTexts.length;
  noBtn.textContent=noTexts[noCount];
  if (noCount === noTexts.length - 1) confetti();""")

# makeCard 完成撒花
rep("      url=cv.toDataURL('image/png');\n    } catch (e) {",
    "      url=cv.toDataURL('image/png');\n      confetti();\n    } catch (e) {")

# ============ 5. 确认书主题化 ============
rep("""function drawCard(g, W, H, portrait) {
  const hasPortrait = !!(portrait && portrait.width && portrait.height);
  const grad=g.createLinearGradient(0,0,W,H);
  grad.addColorStop(0,'#ffdde1'); grad.addColorStop(.55,'#ffb8c8'); grad.addColorStop(1,'#ffc9a8');
  g.fillStyle=grad; g.fillRect(0,0,W,H);
  g.fillStyle='rgba(255,255,255,.95)'; roundRect(g,55,58,640,964,42); g.fill();""",
"""function drawCard(g, W, H, portrait) {
  const hasPortrait = !!(portrait && portrait.width && portrait.height);
  const T = (CHAR_SETS[curSet] && CHAR_SETS[curSet].theme) || {};
  const cA=T.accent||'#e8556e', cA2=T.accent2||'#ff8fb0', cD=T.accentDeep||'#c2185b',
        cM=T.mid||'#b0395c', cO1=T.opt1||'#fff3f6', cO2=T.opt2||'#ffe6ee',
        cB=T.borderSoft||'#ffd6e2', cT=T.tint||'#ffe3ec';
  const grad=g.createLinearGradient(0,0,W,H);
  grad.addColorStop(0,cO1); grad.addColorStop(.55,cO2); grad.addColorStop(1,cA2);
  g.fillStyle=grad; g.fillRect(0,0,W,H);
  g.fillStyle='rgba(255,255,255,.95)'; roundRect(g,55,58,640,964,42); g.fill();""")

rep("""    g.textAlign='center'; g.font='30px sans-serif'; g.fillStyle='#ff9db4';
    g.fillText('💗', px-34, py+40); g.fillText('💗', px+pw+34, py+ph-26);""",
"""    g.textAlign='center'; g.font='30px sans-serif'; g.fillStyle=cA2;
    g.fillText('💗', px-34, py+40); g.fillText('💗', px+pw+34, py+ph-26);""")

rep("""  g.textAlign='center'; g.fillStyle='#e8556e'; g.font='bold 48px sans-serif';
  g.fillText('约会确认书',375,titleY);
  g.fillStyle='#9a8d95'; g.font='25px sans-serif'; g.fillText('已由本人郑重勾选 ♥',375,titleY+42);
  g.strokeStyle='#ffdce6'; g.lineWidth=2;""",
"""  g.textAlign='center'; g.fillStyle=cA; g.font='bold 48px sans-serif';
  g.fillText('约会确认书',375,titleY);
  g.fillStyle=cM; g.font='25px sans-serif'; g.fillText('已由本人郑重勾选 ♥',375,titleY+42);
  g.strokeStyle=cB; g.lineWidth=2;""")

rep("""    g.textAlign='left'; g.fillStyle='#b9a3ad'; g.font='25px sans-serif'; g.fillText(c[0],x,y);
    g.fillStyle='#c2185b'; g.font='bold 29px sans-serif';""",
"""    g.textAlign='left'; g.fillStyle=cM; g.font='25px sans-serif'; g.fillText(c[0],x,y);
    g.fillStyle=cD; g.font='bold 29px sans-serif';""")

rep("""      g.fillStyle='#ffe3ec'; roundRect(g,375-bw/2,by,bw,52,26); g.fill();
      g.fillStyle='#e8556e'; g.fillText(ct,375,by+35);""",
"""      g.fillStyle=cT; roundRect(g,375-bw/2,by,bw,52,26); g.fill();
      g.fillStyle=cA; g.fillText(ct,375,by+35);""")

rep("""  g.textAlign='center'; g.fillStyle='#b0395c'; g.font='27px sans-serif';
  g.fillText('— 来自那个想和你约会的人 💘',375,972);""",
"""  g.textAlign='center'; g.fillStyle=cM; g.font='27px sans-serif';
  g.fillText('— ' + ((CHAR_SETS[curSet]||{}).name || '我') + ' 亲笔 💘',375,972);""")

open(HTML, "w", encoding="utf-8").write(src)
print("六件套补丁完成,", len(src)//1024, "KB")
