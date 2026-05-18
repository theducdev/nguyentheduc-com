---
title: Workflow lập trình với Claude Code mỗi ngày
description: Sau vài tháng dùng Claude Code làm "trợ lý lập trình chính", đây là cách mình tổ chức công việc để khai thác tối đa AI.
pubDatetime: 2026-04-28T08:30:00Z
readingTime: 12 phút đọc
tags: [ai, claude, productivity]
---

Mình đã dùng Claude Code khoảng 6 tháng, thay thế gần như toàn bộ workflow Copilot trước kia.
Bài này tóm lại cách mình tổ chức từng buổi làm việc.

## Quy tắc số 1: Luôn có CLAUDE.md

File `CLAUDE.md` ở gốc repo giúp Claude hiểu context dự án:
- Cấu trúc thư mục
- Convention naming
- Lệnh chạy test, build
- Những điều **không được** làm

## Quy tắc số 2: Yêu cầu plan trước, code sau

Với task lớn hơn 30 phút, mình luôn yêu cầu Claude viết plan trước.
Plan rõ ràng → ít sai → ít phải rollback.

## Quy tắc số 3: Commit nhỏ

Mỗi tính năng nhỏ một commit. Khi Claude phá vỡ thứ gì, mình rollback nhanh.

Còn rất nhiều mẹo nữa, hẹn ở các bài sau!
