"""录制 love_invite 演示视频：Playwright 逐状态截图 → 帧序列 → ffmpeg 合成。

每状态停留约 1.6s（16帧@10fps），拒绝按钮演示逃逸。
"""
import asyncio, os, sys
from pathlib import Path

FRAMES = Path("video_frames")
FRAMES.mkdir(exist_ok=True)
for old in FRAMES.glob("*.png"):
    old.unlink()

URL = "http://localhost:8932/love_invite.html"
FPS = 10


async def main():
    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(
            viewport={"width": 390, "height": 844},
            device_scale_factor=2)          # 780x1688 高清帧
        await page.goto(URL)
        await page.wait_for_timeout(800)

        n = 0

        async def hold(states=16):
            """当前画面截 states 帧（爱心动画在飞，帧帧不同）。"""
            nonlocal n
            for _ in range(states):
                await page.screenshot(path=str(FRAMES / f"f{n:04d}.png"))
                n += 1
                await page.wait_for_timeout(int(1000 / FPS))

        # 场景1：首页（时间）
        await hold(18)
        # 场景2：拒绝按钮逃跑三次 + 台词变化
        for _ in range(3):
            await page.evaluate("document.getElementById('noBtn').click()")
            await hold(8)
        # 场景3：选时间（点周六下午）→ 地点页
        await page.evaluate("document.querySelectorAll('#timeOpts .opt')[0].click()")
        await hold(16)
        # 场景4：选地点（图书馆）→ 活动页
        await page.evaluate("document.querySelectorAll('#placeOpts .opt')[0].click()")
        await hold(16)
        # 场景5：选活动（看电影）→ 清单页
        await page.evaluate("document.querySelectorAll('#actOpts .opt')[0].click()")
        await hold(18)
        # 场景6：生成卡片
        await page.evaluate("document.getElementById('imgBtn').click()")
        await page.wait_for_timeout(400)
        await hold(22)

        await browser.close()
        print(f"frames: {n}")


asyncio.run(main())
