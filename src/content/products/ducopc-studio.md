---
title: "ducopc Studio"
description: Local studio tạo video TikTok / Shorts 9:16 từ slide HTML — không cần API key, Claude Code viết script, Edge TTS + Playwright render thành MP4.
thumbnail: /products/ducopc-studio.jpg
status: beta
price: "999.000đ"
priceAmount: 999000
priceNote: "License cá nhân, dùng vĩnh viễn + update miễn phí 1 năm"
salePrice: "299.000đ"
salePriceAmount: 299000
saleEndsAt: 2026-05-21T00:00:00+07:00
saleNote: "Mua trước 21/05/2026 - giảm còn 299k"
transferContent: "MUA DUCOPC STUDIO"
buyLabel: "Mua ngay"
order: 2
---

## ducopc Studio là gì?

Studio chạy hoàn toàn **local** để biến slide HTML thành video TikTok / Shorts dọc 9:16 —
không cần API key của Gemini hay Anthropic, không phụ thuộc cloud service.

## Workflow

1. **Claude Code** viết script + slide plan trực tiếp trong project
2. `pnpm slide:emit` → build deterministic ra `index.html`
3. **Edge TTS** (miễn phí, tiếng Việt tự nhiên) sinh audio
4. **Playwright** render slide + audio → `final_video.mp4`

## Vì sao chọn ducopc Studio?

- **Không cần API key trả phí** — Edge TTS miễn phí, Playwright local
- **Tiếng Việt tự nhiên** với 6+ giọng đọc Microsoft đã được tinh chỉnh
- **Template sẵn** — 6 starter templates cho TikTok content phổ biến
- **Workflow agent-friendly** — Claude Code làm phần lớn việc, bạn chỉ duyệt và publish

## Stack

- Next.js 16 dashboard (UI + API routes)
- pnpm monorepo: `db | queue | slide-emitter | engine-bridge | slide-types`
- Python render pipeline (CLI: `render`, `tts`, `validate`, `split`)
- SQLite + Edge TTS + Playwright Chromium

## Bao gồm

- ✅ Mã nguồn đầy đủ (Next.js + Python pipeline)
- ✅ 6 starter templates
- ✅ Hướng dẫn cài đặt Windows / macOS / Linux
- ✅ Update miễn phí 1 năm
- ✅ Hỗ trợ qua Zalo group VIP

## 🎬 Showcase — video sinh từ ducopc Studio

3 video dưới đây đều do ducopc Studio render hoàn toàn tự động — Claude Code viết script, slide HTML emit, Edge TTS sinh giọng, Playwright render thành MP4.

<div class="video-showcase">
  <figure class="video-card">
    <video controls preload="metadata" playsinline>
      <source src="/products/videos/ai-agents-revolution.mp4" type="video/mp4">
      Trình duyệt không hỗ trợ video.
    </video>
    <figcaption>AI Agents Revolution</figcaption>
  </figure>
  <figure class="video-card">
    <video controls preload="metadata" playsinline>
      <source src="/products/videos/ai-tao-anh.mp4" type="video/mp4">
      Trình duyệt không hỗ trợ video.
    </video>
    <figcaption>AI Tạo Ảnh — workflow thực chiến</figcaption>
  </figure>
  <figure class="video-card">
    <video controls preload="metadata" playsinline>
      <source src="/products/videos/prompt-engineering.mp4" type="video/mp4">
      Trình duyệt không hỗ trợ video.
    </video>
    <figcaption>Prompt Engineering 101</figcaption>
  </figure>
</div>

<p style="text-align: center; margin-top: 1.5rem;">
  👉 Xem thêm 20+ video demo trên TikTok
  <a href="https://www.tiktok.com/@ducopc" target="_blank" rel="noopener noreferrer">
    <strong>@ducopc</strong>
  </a>
</p>

Inbox [Facebook](https://www.facebook.com/duckhoinghiep) để nhận license + hướng dẫn cài.
