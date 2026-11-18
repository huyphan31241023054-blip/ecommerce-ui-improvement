# JavaScript Labs

**Sinh viên:** Phan Nhật Huy · **MSSV:** 31241023054 · **Lớp:** EE002

Thực hành chương 4 môn Phát triển ứng dụng TMĐT. Mục tiêu là dùng JavaScript để tính toán, làm việc với DOM, kiểm tra biểu mẫu và tải dữ liệu.

| Lab | Nội dung | Exercise |
| --- | --- | --- |
| [Lab 08](Lab08/index.html) | Language Foundations | 8.1–8.11 |
| [Lab 09](Lab09/index.html) | DOM and Events | 9.1–9.8 |
| [Lab 10](Lab10/index.html) | jQuery | 10.1–10.10 |

Mỗi thư mục LabXX/ExerciseYY/ chứa trang index.html và JavaScript riêng nếu dùng script ngoài. Kiểu chung nằm ở css/, ảnh từ bộ Lab ở assets/, jQuery ở vendor/, dữ liệu GET ở data/.

## Truy cập

- [Repository](https://github.com/huyphan31241023054-blip/ecommerce-ui-improvement)
- [Địa chỉ GitHub Pages dự kiến](https://huyphan31241023054-blip.github.io/ecommerce-ui-improvement/JavaScript-Labs/) sau khi tải thư mục lên và bật Pages.
- Tại VS Code, mở thư mục bằng File → Open Folder rồi mở index.html với Live Server. Bài 10.9 và 10.10 cần chạy qua HTTP để trình duyệt tải JSON bằng Ajax.
- Vào Console ở 8.5 và Sources ở 9.6 để kiểm tra biến và gỡ lỗi.

## Tài liệu và điều chỉnh

- [Đề nộp bài](https://drive.google.com/file/d/1S89S19aplG_Ebe3DhYS4klfvZlGn685W/view) và ba bộ Lab do giảng viên liên kết trong đề.
- 10.9 và 10.10 gửi GET đến JSON cùng tên miền. File JSON giữ tên của 53 thành phố từ dịch vụ gốc của Lab. Dịch vụ gốc trả dữ liệu qua HTTP và không kết nối được qua HTTPS khi kiểm tra. Dùng bản lưu cùng tên miền để GitHub Pages có thể tải qua HTTPS. Bài 10.10 có cả tình huống thành công và lỗi HTTP.
- [jQuery 3.7.1](https://jquery.com/) lưu cục bộ. Bài 10.1 có thêm trang kiểm tra CDN và tải bản cục bộ nếu CDN không hoạt động.
- Mã và kiểm thử có hỗ trợ của Codex. Phần tự đánh giá là bản nháp để sinh viên tự diễn đạt lại.
