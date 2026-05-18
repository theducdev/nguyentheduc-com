# nguyentheduc.com

Blog cá nhân của Nguyễn Thế Đức — clone theo phong cách [steipete.me](https://steipete.me).

## Tech stack

- [Astro 4](https://astro.build) — static site generator
- Markdown content collections
- RSS feed + sitemap
- CSS thuần (không Tailwind) — đã chép màu sắc & typography của steipete.me

## Cấu trúc

```
src/
├── components/   # Header, Hero, Footer, PostItem, Socials
├── layouts/      # BaseLayout (HTML khung)
├── content/blog/ # Bài viết Markdown
├── pages/        # Routing (index, posts, about, rss.xml)
├── styles/       # global.css
└── config.ts     # Thông tin site, danh sách social
public/
├── avatar.svg    # Avatar mặc định (đổi sang ảnh thật ở /avatar.jpg)
└── favicon.svg
```

## Chạy local

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # build ra dist/
npm run preview      # preview bản build
```

## Tuỳ chỉnh

- Sửa `src/config.ts` để thay tên, email, social links.
- Sửa `src/components/Hero.astro` để thay câu giới thiệu.
- Thay `public/avatar.svg` bằng ảnh thật `public/avatar.jpg` (đã trỏ sẵn trong Hero).
- Thêm bài mới: tạo file `.md` trong `src/content/blog/` với frontmatter:

  ```yaml
  ---
  title: Tiêu đề bài viết
  description: Mô tả ngắn
  pubDatetime: 2026-05-18T08:00:00Z
  readingTime: 5 phút đọc
  ---
  ```

## Deploy

- **Vercel**: import repo → next-next-finish.
- **Netlify**: `npm run build`, publish dir = `dist`.
- **Cloudflare Pages**: tương tự.

## License

Code: MIT. Nội dung: CC BY 4.0 (giống convention của steipete.me).
