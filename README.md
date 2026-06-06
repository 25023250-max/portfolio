# Digital Portfolio

Website Portfolio tĩnh của Phạm Hồng Hòa, được xây dựng theo yêu cầu môn
"Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo".

## Nội dung

- Trang Giới thiệu: hồ sơ, mục tiêu học tập và mục đích Portfolio.
- Trang Tổng quan: bản đồ 6 năng lực và minh chứng tương ứng.
- Trang Dự án: 6 bài tập với mục tiêu, quy trình, kết quả và bài học.
- Trang Tổng kết: trải nghiệm, tự đánh giá, thách thức và hướng phát triển.

## Xem trên máy

Mở `index.html` trực tiếp hoặc chạy một HTTP server tại thư mục này.

- `index.html`: Portfolio học tập và 6 nhiệm vụ kỹ năng số.
- `profile.html`: trang giới thiệu cá nhân, có thể chỉnh sửa và lưu thông tin.

Từ Portfolio học tập, bấm vào tên **Phạm Hồng Hòa** để mở trang giới thiệu cá nhân.
Trong trang cá nhân, bấm **Chỉnh sửa** để thêm ảnh, cập nhật dự án và thông tin
liên hệ. Dữ liệu được lưu bằng `localStorage` trên trình duyệt đang sử dụng.

## Xuất PDF

Mở website, chọn **Xuất PDF**, sau đó chọn **Save as PDF** trong hộp thoại in.

## Xuất bản bằng GitHub Pages

Đưa ba tệp `index.html`, `styles.css`, `script.js` lên repository và chọn nhánh
chứa website làm nguồn GitHub Pages.

Repository này đã có workflow `.github/workflows/pages.yml`. Khi được đẩy lên
nhánh `main` và GitHub Pages dùng nguồn **GitHub Actions**, website sẽ được triển
khai tự động.
