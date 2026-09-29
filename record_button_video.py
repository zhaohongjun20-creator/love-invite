"""拒绝按钮主角片：虚拟鼠标追捕 + 台词轮播 + 越点越小，帧序列录制。"""
import asyncio
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

FRAMES = Path("btn_frames")
FRAMES.mkdir(exist_ok=True)
for old in FRAMES.glob("*.png"):
    old.unlink()

URL = "http://localhost:8932/love_invite.html"
FPS = 10
W, H = 390, 844
FONT = "C:/Windows/Fonts/msyh.ttc"


def make_card(path, big, small, accent=(232, 85, 110)):
    img = Image.new("RGB", (W * 2, H * 2), (18, 21, 28))
    d = ImageDraw.Draw(img)
    # 渐变粉底
    for y in range(img.height):
        t = y / img.height
        d.line([(0, y), (img.width, y)],
               fill=(int(255 - 40 * t), int(221 - 100 * t), int(225 - 70 * t)))
    bf = ImageFont.truetype(FONT, 88)
    sf = ImageFont.truetype(FONT, 44)
    def center(text, y, font, color=(255, 255, 255)):
        bb = d.textbbox((0, 0), text, font=font)
        d.text(((img.width - bb[2] + bb[0]) / 2, y), text, font=font, fill=color)
    center(big, 640, bf)
    center(small, 800, sf, (255, 250, 250))
    img.save(path)


async def main():
    from playwright.async_api import async_playwright
    n = 0

    # 开场卡 / 结尾卡
    make_card(str(FRAMES / "card_open.png"), "全网最没用的\n拒绝按钮", "它只做两件事：逃跑，和撒娇")
    make_card(str(FRAMES / "card_end.png"), "开源可白嫖", "github.com/zhaohongjun20-creator/love-invite")

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": W, "height": H}, device_scale_factor=2)
        await page.goto(URL)
        await page.wait_for_timeout(600)

        # 注入虚拟鼠标指针（录制画面里可见）
        await page.evaluate("""() => {
            const c = document.createElement('div');
            c.id = 'fakeCursor';
            c.textContent = '🖱️';
            c.style.cssText = 'position:fixed;z-index:99;font-size:34px;pointer-events:none;'
              + 'filter:drop-shadow(0 4px 6px rgba(0,0,0,.4));transition:left .12s,top .12s;';
            document.body.appendChild(c);
        }""")

        async def shot():
            nonlocal n
            await page.screenshot(path=str(FRAMES / f"f{n:04d}.png"))
            n += 1

        async def hold(k):
            for _ in range(k):
                await shot()
                await page.wait_for_timeout(int(1000 / FPS))

        async def move_cursor(x, y):
            await page.evaluate(f"document.getElementById('fakeCursor').style.left='{x-8}px';"
                                f"document.getElementById('fakeCursor').style.top='{y-6}px';")
            await page.mouse.move(x, y)

        async def btn_box():
            return await page.evaluate("""() => {
                const r = document.getElementById('noBtn').getBoundingClientRect();
                return {x: r.x + r.width/2, y: r.y + r.height/2};
            }""")

        # 场景1：开场卡（后期拼入）
        # 场景2：页面全貌 + 指针入场
        await hold(10)
        await move_cursor(195, 700)
        await hold(8)

        # 场景3：追捕戏 —— 指针扑向按钮 x5，每次按钮跳走
        for _ in range(5):
            b = await btn_box()
            # 分 3 步逼近（帧帧截图）
            for t in (0.4, 0.75, 1.0):
                await move_cursor(int(195 + (b["x"] - 195) * t),
                                  int(700 + (b["y"] - 700) * t))
                await hold(2)
            await page.wait_for_timeout(80)   # mouseenter 触发逃逸
            await hold(4)

        # 场景4：抓到了！连点 9 次 —— 台词轮播 + 越点越小
        for _ in range(9):
            b = await btn_box()
            await move_cursor(int(b["x"]), int(b["y"]))
            await page.mouse.click(int(b["x"]), int(b["y"]))
            await hold(9)                      # 台词可读时长

        await browser.close()
        print("frames:", n)

asyncio.run(main())
