---
title: "ducopc Studio"
description: Local studio tạo video TikTok / Shorts 9:16 từ slide HTML — không cần API key, Claude Code viết script, Edge TTS + Playwright render thành MP4.
thumbnail: /products/ducopc-studio.svg
status: beta
price: "Miễn phí"
priceNote: "Sẽ open-source sau khi hoàn thiện docs"
order: 2
---

## ducopc Studio là gì?

Studio chạy hoàn toàn local để biến slide HTML thành video TikTok / Shorts dọc 9:16, không cần API
key của Gemini hay Anthropic.

## Workflow

1. **Claude Code** viết script + slide plan trực tiếp trong project
2. `pnpm slide:emit` → build deterministic ra `index.html`
3. **Edge TTS** (miễn phí, tiếng Việt tự nhiên) sinh audio
4. **Playwright** render slide + audio → `final_video.mp4`

## Stack

- Next.js 16 dashboard (UI + API routes)
- pnpm monorepo: `db | queue | slide-emitter | engine-bridge | slide-types`
- Python render pipeline (CLI: `render`, `tts`, `validate`, `split`)
- SQLite + Edge TTS + Playwright Chromium

## Status

Đang ở giai đoạn beta nội bộ. Sẽ open-source sau khi hoàn thiện docs.
