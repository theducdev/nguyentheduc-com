# nguyentheduc.com

Blog cá nhân + portfolio sản phẩm của **Nguyễn Thế Đức** (CEO/Co-Founder TECHLA AI).
Build bằng **Astro 4**, deploy trên **Cloudflare Pages** với auto-deploy mỗi khi push lên `main`.

> 🌐 Live: https://nguyentheduc.com
> 📦 Repo: https://github.com/theducdev/nguyentheduc-com

---

## Mục lục

- [Quick start (chạy local)](#quick-start-chạy-local)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Cập nhật nội dung](#cập-nhật-nội-dung)
  - [Thêm bài viết blog](#1-thêm-bài-viết-blog)
  - [Thêm / sửa sản phẩm](#2-thêm--sửa-sản-phẩm)
  - [Set up Sale + Countdown](#3-set-up-sale--countdown)
  - [Đổi giá / thanh toán](#4-đổi-giá-hoặc-thông-tin-thanh-toán)
  - [Thêm video showcase](#5-thêm-video-showcase)
  - [Đổi thông tin cá nhân, social](#6-đổi-thông-tin-cá-nhân-social)
  - [Đổi avatar / thumbnail](#7-đổi-avatar--thumbnail-sản-phẩm)
- [Workflow sửa nhanh trên GitHub web](#workflow-sửa-nhanh-trên-github-web)
- [Deploy](#deploy)
- [Frontmatter reference](#frontmatter-reference)

---

## Quick start (chạy local)

```bash
git clone https://github.com/theducdev/nguyentheduc-com
cd nguyentheduc-com
npm install
npm run dev          # → http://localhost:4321 (hot reload)
npm run build        # → ra dist/
npm run preview      # preview bản build
```

**Yêu cầu:** Node.js ≥ 18.

---

## Cấu trúc thư mục

```
nguyentheduc-com/
├── public/                        # File tĩnh, copy nguyên vào root site
│   ├── avatar.jpg                 # Ảnh đại diện hero
│   ├── favicon.svg
│   └── products/                  # Asset của sản phẩm
│       ├── claude-code-opc.jpg    # Thumbnail SP
│       ├── ducopc-studio.jpg
│       └── videos/                # Video showcase MP4 (≤25MB/file)
│           ├── ai-agents-revolution.mp4
│           └── ...
│
├── src/
│   ├── components/                # Astro components dùng chung
│   │   ├── BuyButton.astro        # Nút mua + modal QR Sepay
│   │   ├── SaleCountdown.astro    # Đếm ngược sale
│   │   ├── Header.astro           # Nav: Bài viết / Sản phẩm / Giới thiệu
│   │   ├── Footer.astro
│   │   ├── Hero.astro             # Avatar + tagline trang chủ
│   │   ├── PostItem.astro
│   │   └── Socials.astro          # Row icon social (FB, TikTok, Zalo, ...)
│   │
│   ├── content/                   # Astro content collections
│   │   ├── config.ts              # Schema cho 2 collections: blog + products
│   │   ├── blog/                  # Mỗi file .md = 1 bài viết
│   │   │   ├── xay-blog-bang-astro.md
│   │   │   └── ...
│   │   └── products/              # Mỗi file .md = 1 sản phẩm
│   │       ├── claude-code-opc.md
│   │       └── ducopc-studio.md
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro       # HTML khung + SEO meta + script global
│   │
│   ├── pages/                     # Routing tự động theo file path
│   │   ├── index.astro            # Trang chủ /
│   │   ├── about.astro            # /about
│   │   ├── 404.astro              # Trang 404 custom
│   │   ├── posts/
│   │   │   ├── index.astro        # /posts (list)
│   │   │   └── [...slug].astro    # /posts/<slug>
│   │   ├── products/
│   │   │   ├── index.astro        # /products (list)
│   │   │   └── [...slug].astro    # /products/<slug>
│   │   ├── rss.xml.js             # /rss.xml
│   │   ├── sitemap.xml.ts         # /sitemap.xml
│   │   └── robots.txt.ts
│   │
│   ├── styles/
│   │   └── global.css             # Toàn bộ CSS (chia comment block)
│   │
│   └── config.ts                  # Thông tin site, SOCIALS, PAYMENT
│
├── astro.config.mjs
├── package.json
└── README.md (file này)
```

---

## Cập nhật nội dung

### 1. Thêm bài viết blog

Tạo file mới `src/content/blog/<slug>.md`:

```yaml
---
title: "Tiêu đề bài viết"
description: Mô tả 1-2 câu (hiện trên list trang chủ + meta SEO)
pubDatetime: 2026-06-15T08:00:00Z
readingTime: 5 phút đọc
tags: [astro, ai]
draft: false           # true = chưa publish, sẽ ẩn khỏi list
---

Nội dung Markdown bình thường.

## Heading 2

- bullet
- list

**Bold**, *italic*, [link](https://example.com), `inline code`.

```js
console.log("code block với syntax highlight");
```
```

**Lưu ý:**
- Slug = tên file không đuôi (vd `chao-mung.md` → URL `/posts/chao-mung`)
- Nếu tiêu đề có dấu `:` thì phải bọc bằng nháy kép: `title: "Next.js vs Astro: cái nào tốt?"`
- `pubDatetime` dùng định dạng ISO 8601, có thể kèm timezone `+07:00`

### 2. Thêm / sửa sản phẩm

Tạo file `src/content/products/<slug>.md`:

```yaml
---
title: "Tên sản phẩm"
description: Mô tả ngắn, hiển thị ở list + detail header
thumbnail: /products/ten-anh.jpg    # đặt file ảnh trong public/products/
status: live                         # live | beta | wip | paused
price: "299.000đ"                    # text hiển thị giá gốc
priceAmount: 299000                  # số nguyên VND (dùng cho QR)
priceNote: "Đã bao gồm VAT"          # text mô tả phụ (optional)
transferContent: "MUA TENSP"         # nội dung CK Sepay (ngắn, không dấu)
buyLabel: "Mua ngay"                 # text trên nút
order: 3                             # thứ tự (1 = đầu danh sách)
---

Nội dung chi tiết Markdown — sẽ render ở trang `/products/<slug>`.
```

**Có thể embed video / HTML thoải mái** trong markdown:

```html
<div class="video-showcase">
  <figure class="video-card">
    <video controls preload="metadata" playsinline>
      <source src="/products/videos/demo.mp4" type="video/mp4">
    </video>
    <figcaption>Caption video</figcaption>
  </figure>
</div>
```

### 3. Set up Sale + Countdown

Thêm 4 field vào frontmatter của sản phẩm:

```yaml
salePrice: "299.000đ"
salePriceAmount: 299000
saleEndsAt: 2026-12-31T00:00:00+07:00    # ISO datetime VN (UTC+7)
saleNote: "Đăng ký trước 31/12 - giảm 70%"
```

**Tự động:**
- ✅ Hiện banner sale + countdown trên `/products`
- ✅ Giá sale highlighted + giá gốc gạch ngang
- ✅ QR Sepay sinh ra với `amount=salePriceAmount`
- ✅ Khi sale hết hạn (client-side JS check): **tự động revert** giá + QR về giá gốc, **không cần redeploy**

**Bỏ sale:** xoá 4 dòng `sale*` trong frontmatter.

### 4. Đổi giá hoặc thông tin thanh toán

**Đổi giá của 1 SP:** sửa `price` + `priceAmount` (cả 2 phải khớp nhau) trong file `.md` của SP đó.

**Đổi số tài khoản nhận tiền (áp cho TẤT CẢ SP):** sửa `src/config.ts`:

```ts
export const PAYMENT = {
  account: '8352771',         // số tài khoản
  bank: 'ACB',                 // mã ngân hàng (vd ACB, VCB, BIDV, MB, VPB...)
  accountName: 'NGUYEN THE DUC',
  qrApi: 'https://qr.sepay.vn/img',
};
```

**Mã ngân hàng Sepay hỗ trợ:** xem https://qr.sepay.vn — phổ biến nhất:
`ACB` `VCB` (Vietcombank) `BIDV` `TCB` (Techcombank) `MB` (MBBank) `VPB` (VPBank) `STB` (Sacombank) `TPB` (TPBank) `OCB` `MSB`.

### 5. Thêm video showcase

1. Lưu file MP4 vào `public/products/videos/<ten-video>.mp4` (mỗi file ≤25MB)
2. Trong markdown của sản phẩm, thêm:

```html
<div class="video-showcase">
  <figure class="video-card">
    <video controls preload="metadata" playsinline>
      <source src="/products/videos/ten-video.mp4" type="video/mp4">
    </video>
    <figcaption>Tên video</figcaption>
  </figure>
</div>
```

`video-showcase` grid 3 cột desktop, 1 cột mobile. Thêm nhiều `<figure>` để có nhiều video — sẽ auto wrap.

### 6. Đổi thông tin cá nhân, social

Tất cả ở `src/config.ts`:

```ts
export const SITE = {
  website: 'https://nguyentheduc.com/',
  author: 'Nguyễn Thế Đức',
  title: 'Nguyễn Thế Đức',
  role: 'CEO / Co-Founder TECHLA AI',
  desc: 'Mô tả meta cho SEO',
  ogImage: '/avatar.jpg',
  email: 'theduc.ng@gmail.com',
  phone: '0834869558',
};

export const SOCIALS = [
  { name: 'Facebook', href: 'https://...', linkTitle: 'FB', active: true },
  { name: 'TikTok',   href: 'https://...', linkTitle: 'TikTok', active: true },
  { name: 'Zalo',     href: 'https://zalo.me/...', linkTitle: 'Zalo', active: true },
  // Có thể thêm/bớt. Tắt 1 social: đổi active: false
];

export const COMMUNITIES = [
  // Hiển thị ở /about
  { name: 'Tên cộng đồng', href: '...', members: '~1k thành viên', desc: '...' },
];
```

**Đổi tagline ở trang chủ:** sửa `src/components/Hero.astro` đoạn `<p class="hero-desc">`.

**Đổi nội dung trang Giới thiệu:** sửa `src/pages/about.astro`.

### 7. Đổi avatar / thumbnail sản phẩm

**Avatar trang chủ:** Thay file `public/avatar.jpg` (giữ nguyên tên).
Nếu đổi đuôi (vd `.png`), sửa thêm `src/components/Hero.astro` line `<img src="/avatar.jpg"...>`.

**Thumbnail sản phẩm:** Thay file trong `public/products/<ten>.jpg` và update `thumbnail:` trong file markdown của SP.

**Tip:** ảnh thumbnail SP nên là **vuông 1:1**, kích thước ≥ 800×800px để rõ trên cả list và detail.

---

## Workflow sửa nhanh trên GitHub web

**Không cần clone, không cần Node.js — sửa được ngay trên điện thoại / máy không cài gì:**

1. Vào https://github.com/theducdev/nguyentheduc-com
2. Click file muốn sửa (vd `src/content/blog/xay-blog-bang-astro.md`)
3. Click icon **✏️ Edit** góc trên phải
4. Sửa nội dung → cuộn xuống → **Commit changes** → đặt commit message → **Commit**
5. Đợi ~1 phút → Cloudflare Pages auto-deploy → reload nguyentheduc.com

**Upload ảnh mới:** vào folder `public/products/` trên GitHub → **Add file** → **Upload files** → kéo thả ảnh → Commit.

---

## Deploy

Deploy hoàn toàn tự động qua **Cloudflare Pages**:

- **Trigger:** push commit lên branch `main`
- **Build:** `npm run build` → output `dist/`
- **Live:** ~30-60 giây sau push
- **Custom domain:** `nguyentheduc.com` (chuyển nameservers về Cloudflare)
- **Web Analytics:** bật ở Cloudflare dashboard → Analytics & Logs → Web Analytics

**Kiểm tra deploy status:** https://dash.cloudflare.com → Workers & Pages → `nguyentheduc-com` → tab **Deployments**.

**Rollback nếu deploy mới có bug:** vào tab Deployments → tìm deployment cũ ổn → **Retry deployment** hoặc **Rollback to this version**.

---

## Frontmatter reference

### Blog post (`src/content/blog/*.md`)

| Field | Bắt buộc | Loại | Mô tả |
|---|---|---|---|
| `title` | ✅ | string | Tiêu đề bài viết |
| `description` | ✅ | string | Mô tả ngắn, dùng cho SEO + list |
| `pubDatetime` | ✅ | ISO datetime | Ngày publish |
| `author` | – | string | Mặc định "Nguyễn Thế Đức" |
| `tags` | – | array | `[tag1, tag2]` |
| `draft` | – | boolean | true = ẩn |
| `readingTime` | – | string | vd "5 phút đọc" |

### Product (`src/content/products/*.md`)

| Field | Bắt buộc | Loại | Mô tả |
|---|---|---|---|
| `title` | ✅ | string | Tên SP |
| `description` | ✅ | string | Mô tả ngắn |
| `thumbnail` | ✅ | string | Đường dẫn ảnh, vd `/products/abc.jpg` |
| `status` | – | enum | `live` \| `beta` \| `wip` \| `paused` |
| `price` | – | string | Text giá hiển thị, vd `"299.000đ"` |
| `priceAmount` | – | number | Số nguyên VND, dùng cho QR Sepay |
| `priceNote` | – | string | Ghi chú phụ giá |
| `salePrice` | – | string | Giá sale (text) |
| `salePriceAmount` | – | number | Giá sale (số, cho QR) |
| `saleEndsAt` | – | ISO datetime | Thời điểm kết thúc sale |
| `saleNote` | – | string | Ghi chú sale |
| `transferContent` | – | string | Nội dung CK Sepay (max ~25 ký tự, không dấu) |
| `buyLink` | – | string | URL external thay cho QR (vd Gumroad, Payhip) |
| `buyLabel` | – | string | Text nút, mặc định "Mua ngay" |
| `externalLink` | – | string | Nếu có, click vào SP sẽ ra link này thay vì trang chi tiết |
| `order` | – | number | Thứ tự sắp xếp, 1 = đầu |
| `draft` | – | boolean | true = ẩn |

---

## Bug & limitation đã biết

- **`@astrojs/sitemap` không tương thích** với Astro 4.16 → đã tự viết `src/pages/sitemap.xml.ts` thay thế.
- **Redirect www → apex** không làm bằng `_redirects` được (Cloudflare Pages chặn cross-host) → đã setup bằng **Cloudflare Redirect Rules** trên dashboard.
- **Video showcase mỗi file ≤25MB** (limit Cloudflare Pages free).

---

## Tech stack

- [Astro 4.16](https://astro.build) — static site generator
- CSS thuần (không Tailwind) — toàn bộ trong `src/styles/global.css`
- Markdown + Content Collections (kèm Zod schema validation)
- HTML5 `<dialog>` cho modal QR (không JS framework)
- Cloudflare Pages — host + CDN + Web Analytics
- Sepay QR API — tự sinh QR thanh toán không cần backend

---

## License

Code: MIT. Nội dung: CC BY 4.0.
