---
title: Xây blog cá nhân bằng Astro trong 30 phút
description: Astro là framework tuyệt vời cho blog tĩnh — nhanh, nhẹ, SEO tốt. Cùng dựng một cái từ con số 0.
pubDatetime: 2026-05-15T09:00:00Z
readingTime: 8 phút đọc
tags: [astro, web, blog]
---

Hôm nay mình muốn chia sẻ trải nghiệm dựng blog cá nhân bằng [Astro](https://astro.build) —
một framework đang rất hot trong cộng đồng JAMstack.

## Vì sao chọn Astro?

- **Tốc độ**: Astro chỉ ship JavaScript khi thực sự cần thiết.
- **DX tốt**: Cú pháp như HTML mở rộng, dễ học cho người mới.
- **SEO tốt**: Render server-side mặc định, sitemap, RSS có sẵn.

## Các bước

1. `npm create astro@latest`
2. Chọn template, cài integration `@astrojs/sitemap`.
3. Viết Markdown trong `src/content/blog/`.
4. Deploy lên Vercel hoặc Netlify.

> Mỗi commit lên GitHub đều tự động deploy. Quá tiện.

Trong các bài tiếp theo, mình sẽ chia sẻ thêm về việc tối ưu tốc độ và tích hợp các công cụ
phân tích như Plausible hoặc Umami.
