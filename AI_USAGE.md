# AI Usage Log

## 1. Công cụ AI

Tên công cụ: ChatGPT/Codex.

## 2. Mục đích sử dụng

Hỗ trợ đọc yêu cầu bài tập, phân tích giao diện Tiki, đề xuất cách trình bày sản phẩm, cung cấp mã HTML/CSS ban đầu, tạo ảnh minh họa và hướng dẫn kiểm tra kết quả.

## 3. Prompt đã sử dụng

Các trích dẫn sau là những yêu cầu chính thực sự đã gửi trong cuộc trò chuyện:

1. “hướng dẫn tôi làm bài tập về nhà này đi, hình như là làm trên vs code” — kèm liên kết PDF đề bài.
2. “tiki đi” — lựa chọn website tham khảo.
3. “bạn làm cho tôi phần này luôn Mở Tiki trên Chrome và kiểm tra lần lượt:” — yêu cầu hỗ trợ khảo sát.
4. “viết sao” — yêu cầu hướng dẫn viết mã sau khi tạo tệp.
5. “chưa có ảnh sách và cái AI usage tôi chưa bỏ gì vô” — phản ánh vấn đề về ảnh và yêu cầu bổ sung tài liệu.
6. “`index.html` phần này viết lại đầy đủ cho tôi copy cho lẹ” — yêu cầu phiên bản HTML đầy đủ sử dụng ảnh cục bộ.
7. “bám sát yêu cầu của file pdf tôi gửi nhé” — yêu cầu đối chiếu lại bài với đề.

## 4. Kết quả AI đề xuất

- Bảng khảo sát 5 khu vực, ảnh minh chứng và đề xuất cải tiến.
- Trang Tiệm Sách Nhỏ gồm tiêu đề, khu vực sản phẩm và 4 thẻ sách.
- Mỗi sản phẩm có ảnh, tên, tác giả, giá và nút liên kết tìm kiếm trên Tiki.
- CSS tách riêng, sử dụng Grid, Flexbox và Media Queries cho bố cục 4/2/1 cột.
- 4 ảnh bìa SVG minh họa lưu trong dự án thay cho ảnh mẫu tải từ bên ngoài.
- Tài liệu README.md và bản ghi sử dụng AI.

## 5. Kiểm tra và điều chỉnh

### Đã có bằng chứng trong cuộc trò chuyện

- Người học chọn Tiki làm website tham khảo và phản ánh tình trạng chưa có ảnh sách.
- Trợ lý trực tiếp quan sát Tiki, lưu ảnh minh chứng và ghi rõ giới hạn khi giỏ hàng yêu cầu đăng nhập.
- Trợ lý đề xuất đổi đường dẫn ảnh trực tuyến sang ảnh SVG cục bộ và cung cấp bản HTML tương ứng.
- Không sử dụng kết luận về thao tác giỏ hàng sau đăng nhập vì chưa kiểm chứng.
- Vấn đề tôi phát hiện: ảnh sách chưa hiển thị.
- Điều chỉnh: thay đường dẫn ảnh trực tuyến bằng đường dẫn
  đến các file SVG trong thư mục images.
- Kết quả: [ghi kết quả sau khi mở lại trang].
- Giải thích: thuộc tính src của thẻ img xác định vị trí
  ảnh. Đường dẫn images/ được tính từ vị trí index.html.

### Việc người học cần thực hiện và ghi kết quả thực tế

- [x ] Mở trang và xác nhận CSS được tải.
- [x ] Xác nhận đủ 4 ảnh và thông tin sản phẩm.
- [ x] Kiểm tra bố cục trên máy tính và điện thoại.
- [ x] Kiểm tra liên kết đến Tiki.
- [x ] Tự chỉnh ít nhất một điểm đã phát hiện và ghi rõ trước/sau.
- [x ] Đối chiếu khảo sát với website, bổ sung nhận xét cá nhân.
**Nhật ký tự điều chỉnh — cần điền sau khi thực hiện:**

- Vấn đề tôi phát hiện: ảnh sách chưa hiển thị trong trang.
- Thay đổi thực tế đã làm: [ghi các đường dẫn hoặc thuộc tính đã sửa].
- Cách kiểm tra: [ghi trình duyệt, kích thước màn hình và thao tác đã thử].
- Kết quả sau sửa: [ghi kết quả quan sát được; chưa thành công thì nêu rõ].

Chỉ đánh dấu hoặc ghi hoàn tất khi đã thực sự thực hiện. Việc trợ lý chạy công cụ không được ghi thành kiểm tra do người học tự thực hiện.

## 6. Phần tôi hiểu và có thể giải thích

Đây là các nội dung cần đọc, thử và tự giải thích trước khi nộp. Chỉ giữ dưới dạng xác nhận năng lực sau khi đã hiểu:

- Thẻ img lấy ảnh theo thuộc tính src; alt cung cấp mô tả thay thế. Đường dẫn images/ được tính từ vị trí index.html.
- Thẻ link trong head nối HTML với style.css.
- Mỗi article chứa một sản phẩm; các article nằm trong phần tử có lớp product-grid.
- display: grid và grid-template-columns xác định cách chia cột sản phẩm.
- Media Queries thay đổi số cột theo chiều rộng màn hình.
- Flexbox trong product-info giúp sắp xếp thông tin và vị trí liên kết trong thẻ.
- Thẻ a có href dẫn đến trang tìm kiếm; đây không phải chức năng thêm giỏ hay mua hàng thật.
- Việc sửa src của ảnh là thay tài nguyên hiển thị, không thay đổi bố cục CSS hoặc bổ sung backend.
