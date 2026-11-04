# Báo cáo Buổi 2

## Kiểm thử và điều chỉnh

Bản gốc có style.css rỗng, khiến CSS không được áp dụng. Codex đã bổ sung CSS. Ảnh minh chứng trước và sau nằm trong images/minh-chung/.

| Nội dung kiểm tra | Kết quả | Ghi chú |
| --- | --- | --- |
| Trang và CSS | Đạt | Chrome headless hiển thị Grid và ảnh sau |
| Bốn ảnh và alt | Đạt | Ảnh tải thành công, có mô tả alt |
| Liên kết nội bộ | Đạt | Các đích nội bộ tồn tại |
| Bố cục 1366, 768, 390 px | Đạt | Lần lượt 4, 2 và 1 cột; không tràn ngang theo số đo DOM |
| Liên kết Tiki | Chưa kiểm tra | Cần thử mở thực tế khi có mạng |
| Hover và focus | Chưa kiểm tra tương tác | Quy tắc CSS đã được thêm; cần kiểm tra bằng chuột và Tab |
| Người học tự sửa | Chưa thực hiện | Điền sau khi tự làm |

**Yêu cầu người học tự thực hiện:** Đề yêu cầu sinh viên tự phát hiện và tự sửa ít nhất một vấn đề. Hãy chạy trang, thử một thay đổi nhỏ, rồi ghi lại vấn đề, nguyên nhân, thuộc tính đã sửa và kết quả thực tế tại đây. Không ghi thao tác của AI thành thao tác của bản thân.

- Vấn đề tự phát hiện: …
- Nguyên nhân: …
- Thay đổi tự thực hiện: …
- Kết quả kiểm tra: …

## Gợi ý trả lời 7 câu hỏi — cần đọc và diễn đạt theo hiểu biết của mình

1. header chứa phần đầu trang, nav chứa điều hướng, main chứa nội dung chính, section nhóm nội dung theo chủ đề, article đại diện mỗi sách và footer chứa chân trang.
2. padding: 16px trong .product-info tạo khoảng cách bên trong phần thông tin; margin tạo khoảng cách bên ngoài phần tử, ví dụ margin bên dưới giá.
3. Flexbox được dùng ở .navigation để căn logo và menu: justify-content phân bố theo trục chính, align-items căn theo trục còn lại. .product-info cũng dùng Flexbox theo cột.
4. Flexbox thường thuận tiện cho một chiều; Grid tổ chức hàng và cột. Trang dùng Grid cho nhiều thẻ sách vì cần chia cột nhất quán.
5. Nếu xóa display: grid, các thẻ trở lại bố cục thông thường, xếp nối tiếp theo chiều dọc; các thiết lập cột và gap của Grid không còn tác dụng như trước.
6. alt mô tả nội dung ảnh khi ảnh không tải được và cho công nghệ hỗ trợ như trình đọc màn hình.
7. AI đề xuất bổ sung CSS vì file CSS rỗng. Cần tự kiểm tra trên trình duyệt và ghi lại một điều chỉnh thực tế của bản thân trước khi nộp.
