---
title: "Next.js vs Astro — khi nào dùng gì?"
description: Cả hai đều là framework xịn cho web. Câu trả lời phụ thuộc vào việc bạn build ứng dụng động hay nội dung tĩnh.
pubDatetime: 2026-02-05T08:00:00Z
readingTime: 7 phút đọc
tags: [nextjs, astro, web]
---

Câu hỏi này mình nhận được rất nhiều. Câu trả lời ngắn gọn:

## Dùng Astro nếu

- Bạn làm blog, landing page, docs
- Bạn ưu tiên tốc độ tải trang
- Bạn không cần nhiều JavaScript phía client

## Dùng Next.js nếu

- Bạn làm dashboard, SaaS, app phức tạp
- Bạn cần SSR/ISR mạnh mẽ
- Bạn có nhiều trang động phụ thuộc user

## Trải nghiệm cá nhân

Mình dùng Astro cho blog cá nhân này, dùng Next.js cho các SaaS sản phẩm.
Đôi khi mix cả hai trong cùng monorepo — Astro cho marketing site,
Next.js cho app chính.
