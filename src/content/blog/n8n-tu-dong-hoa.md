---
title: Tự động hoá kinh doanh nhỏ với n8n
description: n8n giúp mình tự động hoá hàng chục quy trình lặp đi lặp lại — từ gửi email cho khách, đồng bộ đơn hàng, đến chăm sóc khách hàng.
pubDatetime: 2026-04-10T07:00:00Z
readingTime: 10 phút đọc
tags: [n8n, automation, business]
---

Trước đây mình phải chép tay từng đơn hàng từ form sang Google Sheet, rồi gửi mail xác nhận.
Mỗi ngày mất 1-2 tiếng. Với n8n, toàn bộ quy trình đó giờ chạy tự động trong 5 giây.

## Use case thực tế

- **Đơn hàng → Sheets → Email**: Khách điền form, n8n nhận webhook, ghi vào sheet, gửi mail.
- **Đồng bộ contact giữa Zalo OA và CRM**.
- **Tổng hợp báo cáo doanh thu hàng tuần qua Telegram**.

## Self-host hay cloud?

Mình self-host trên VPS 5$/tháng. Đủ chạy 50+ workflow, ổn định.
Nếu bạn không rành Linux, dùng bản cloud cho tiện.

Sẽ có serie hướng dẫn chi tiết từng workflow ở các bài kế tiếp.
