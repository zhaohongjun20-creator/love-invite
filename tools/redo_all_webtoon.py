# -*- coding: utf-8 -*-
"""
全量重做：6 角色 × 5 表情 = 30 张，cogview-3-flash + 韩漫条漫画风。
- 画风核心对齐用户提供的韩漫参考（锐利五官/光泽发丝/成熟气质/柔和渐变背景）
- 每角色锁同一 seed + 同一段角色描述，仅表情子句变化
- 生成 → 方形裁 0.705 竖版 → 720x1021 → 裁水印 → JPEG
"""
import os, sys, json, time, io, urllib.request
from PIL import Image

sys.stdout.reconfigure(errors="replace")
KEY = "5372aafb55364019a29890ebc07a28eb.CyNVSDHiRaCeinxG"
API = "https://open.bigmodel.cn/api/paas/v4/images/generations"
MODEL = "cogview-3-flash"
PROJ = r"C:/Users/15804/Documents/love-invite"
TARGET = (720, 1021)

STYLE = "高质量韩国漫画风格条漫原画插画，韩系写实画风，精致锐利的五官，细腻有光泽的头发渲染，皮肤质感真实，肩部以上半身像，人物看向观众，柔和渐变纯色背景，柔和专业光效，无文字，无对话框，无水印。"

CHARACTERS = [
    {
        "dir": "assets/char", "name": "小桃", "seed": 30101,
        "desc": "一位粉色长卷发的甜美少女，粉色杏眼，白皙皮肤，脸颊微微泛红，穿米白色衬衫领口系粉色丝带，粉色渐变背景",
        "moods": {
            "normal":  "温柔平静的微笑，安静地看向观众",
            "shy":     "害羞脸红，微微低头，眼睛看向旁边，手轻捂脸颊",
            "happy":   "开心大笑，眼睛弯成月牙，灿烂甜美",
            "excited": "惊喜激动，睁大眼睛，嘴巴微张，微微前倾",
            "love":    "心动陶醉，脸颊绯红，眼神水润迷离，双手捧脸",
        },
    },
    {
        "dir": "assets/char/girl2", "name": "星柠", "seed": 30102,
        "desc": "一位银紫色长直发的清冷少女，灰蓝色狭长眼眸，眼神慵懒疏离，皮肤白皙，穿白色宽松衬衫，浅紫色渐变背景",
        "moods": {
            "normal":  "平静地侧目看向观众，面无表情，气质清冷",
            "shy":     "罕见地脸红，皱眉别过头，不想让人看到表情",
            "happy":   "嘴角上扬露出浅笑，眼神柔和下来，罕见地开心",
            "excited": "睁大眼睛，微微张开嘴，惊讶地看向观众",
            "love":    "眼神变得温柔湿润，脸颊泛红，若有所思地凝视观众",
        },
    },
    {
        "dir": "assets/char/girl3", "name": "柚茶", "seed": 30103,
        "desc": "一位焦糖色长发的温暖少女，琥珀色眼睛，皮肤白皙，穿米色针织开衫内搭白衬衫，气质温柔知性，暖橘色渐变背景",
        "moods": {
            "normal":  "温暖平和的微笑，安静看向观众",
            "shy":     "害羞低头，脸颊绯红，手指轻碰嘴唇",
            "happy":   "灿烂地笑，眼睛弯弯，温暖治愈",
            "excited": "惊喜地睁大眼睛，双手轻捂嘴",
            "love":    "深情款款，眼神温柔湿润，脸颊泛红微笑",
        },
    },
    {
        "dir": "assets/char/male", "name": "小川", "seed": 30104,
        "desc": "一位黑色微卷短发的帅气年轻男生，深邃的眼眸，锐利立体五官，皮肤白皙，穿白色衬衫外搭深色开衫外套，灰粉色渐变背景",
        "moods": {
            "normal":  "平静深邃地看向观众，面无表情",
            "shy":     "耳根泛红，移开视线，眉头微皱掩饰",
            "happy":   "嘴角上扬，眼神柔和，罕见温柔微笑",
            "excited": "睁大眼睛，惊讶认真的表情，微微前倾",
            "love":    "眼神温柔炽热，脸颊微红，深情凝视观众",
        },
    },
    {
        "dir": "assets/char/male2", "name": "墨白", "seed": 30105,
        "desc": "一位黑色顺直短发的清冷男生，狭长灰蓝色眼睛，锐利下颌线，皮肤白皙，刘海微遮眉毛，穿黑色夹克外套白色衬衫，冷灰色渐变背景",
        "moods": {
            "normal":  "冷淡地直视观众，面无表情，气场清冷",
            "shy":     "耳根泛红，别过头避开视线，眉头轻皱",
            "happy":   "嘴角勾起浅浅弧度，眼神柔和，浅浅微笑",
            "excited": "睁大眼睛，惊讶又认真，微微前倾",
            "love":    "眼神温柔，脸颊微红，若有所思地凝视观众",
        },
    },
    {
        "dir": "assets/char/male3", "name": "炎阳", "seed": 30106,
        "desc": "一位深棕色偏分短发的成熟帅气男生，狭长上挑的眼睛，眼神自信玩味，五官深邃立体，穿深棕色西装白色衬衫配深色领带，暖灰色渐变背景",
        "moods": {
            "normal":  "自信微笑，眼神玩味地看向观众，从容",
            "shy":     "轻咳掩饰，移开视线，耳根泛红",
            "happy":   "开怀大笑，眉眼舒展，露出牙齿，阳光帅气",
            "excited": "挑眉睁大眼睛，笑意加深，饶有兴致",
            "love":    "笑容变温柔认真，眼神炽热，脸颊微红",
        },
    },
]

def gen_one(prompt, seed, retries=4):
    body = json.dumps({"model": MODEL, "prompt": prompt, "size": "1024x1024", "seed": seed}).encode()
    backoff = 8
    for i in range(retries):
        try:
            req = urllib.request.Request(API, data=body, headers={
                "Content-Type": "application/json", "Authorization": "Bearer " + KEY})
            with urllib.request.urlopen(req, timeout=90) as r:
                url = json.loads(r.read())["data"][0]["url"]
            with urllib.request.urlopen(url, timeout=60) as r:
                return r.read()
        except Exception as e:
            print(f"    重试{i+1}: {e} (等{backoff}s)")
            time.sleep(backoff)
            backoff = min(backoff * 2, 60)
    return None

def process(png_bytes, dst):
    im = Image.open(io.BytesIO(png_bytes)).convert("RGB")
    w, h = im.size
    tr = TARGET[0] / TARGET[1]
    nw = round(h * tr)                      # 方形裁竖版：1024 -> 722 宽
    im = im.crop(((w - nw)//2, 0, (w + nw)//2, h))
    im = im.resize(TARGET, Image.LANCZOS)
    # 裁右下角 AI生成 水印：底部裁 7%，顶部补齐比例（整图上移，等比不变形）
    cut = round(TARGET[1] * 0.93)
    im = im.crop((0, 0, TARGET[0], cut))
    canvas = Image.new("RGB", TARGET, im.getpixel((TARGET[0]//2, 5)))
    canvas.paste(im.resize((TARGET[0], cut), Image.LANCZOS), (0, TARGET[1] - cut))
    canvas.save(dst, "JPEG", quality=88, optimize=True)
    return os.path.getsize(dst) / 1024

def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    done = fail = 0
    for ch in CHARACTERS:
        if only and not ch["dir"].replace("assets/char", "").strip("/") == only:
            continue
        os.makedirs(os.path.join(PROJ, ch["dir"]), exist_ok=True)
        print(f"\n=== {ch['name']} ({ch['dir']}) seed={ch['seed']} ===", flush=True)
        for mood, expr in ch["moods"].items():
            dst = os.path.join(PROJ, ch["dir"], mood + ".jpg")
            if os.path.exists(dst):
                print(f"  {mood}: 已存在，跳过", flush=True)
                continue
            prompt = STYLE + "角色：" + ch["desc"] + "。表情姿态：" + expr + "。"
            data = gen_one(prompt, ch["seed"])
            if data is None:
                print(f"  {mood}: 生成失败！", flush=True)
                fail += 1
                continue
            kb = process(data, dst)
            done += 1
            print(f"  {mood}: OK {kb:.0f}KB", flush=True)
            time.sleep(6)
    print(f"\n完成: 成功{done} 失败{fail}", flush=True)

if __name__ == "__main__":
    main()
