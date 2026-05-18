---
title: Vì sao mình bỏ Firebase để dùng Supabase
description: Supabase mang lại Postgres thật, mã nguồn mở, và chi phí dễ kiểm soát hơn nhiều.
pubDatetime: 2026-03-22T10:00:00Z
readingTime: 9 phút đọc
tags: [supabase, backend, postgres]
---

Firebase đã phục vụ mình rất tốt trong 3 năm. Nhưng cuối cùng mình vẫn chuyển sang Supabase
cho gần như mọi dự án mới. Đây là lý do.

## Postgres là vàng

Firestore mạnh nhưng query phức tạp khó. Postgres + Row Level Security của Supabase đáp ứng
mọi nhu cầu, kể cả phân quyền multi-tenant.

## Chi phí dễ đoán

Firebase tính tiền theo read/write/storage — rất khó dự đoán khi user tăng lên.
Supabase tính theo plan cố định, predictable.

## Self-host được

Khi cần kiểm soát hoàn toàn, mình self-host Supabase trên VPS. Toàn bộ stack mã nguồn mở.

Bài sau mình sẽ chia sẻ kiến trúc multi-tenant chi tiết với RLS.
