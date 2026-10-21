E-commerce UI Improvement — Tiệm Sách Nhỏ
1. Giới thiệu
Bài tập khảo sát website Tiki và xây dựng một trang HTML/CSS minh họa phương án cải tiến cách trình bày sách và khu vực thao tác sản phẩm.
Phạm vi lựa chọn là làm rõ ảnh, tên, tác giả, giá và liên kết của từng sản phẩm; bố trí các thẻ theo kích thước màn hình; không dùng tiện ích nổi chồng lên nút thao tác.
2. Website tham khảo
Tên website: Tiki.
URL: https://tiki.vn/
Nhóm khảo sát: Nhà Sách Tiki — https://tiki.vn/nha-sach-tiki/c8322
Các khu vực: trang chủ, danh mục, chi tiết sản phẩm, tìm kiếm và lối vào giỏ hàng.
Báo cáo và ảnh minh chứng: xem survey.md và thư mục images/.
Giới hạn khảo sát: trợ lý thực hiện bằng trình duyệt trong ứng dụng vì Chrome chưa kết nối. Giỏ hàng yêu cầu đăng nhập, nên nội dung giỏ sau đăng nhập chưa được kiểm tra. Chưa kiểm thử thay đổi bộ lọc/sắp xếp hoặc phần mô tả chi tiết sách; cần bổ sung quan sát thực tế trước khi coi khảo sát là hoàn chỉnh.
3. Chức năng
Hiển thị danh sách 4 sách mẫu.
Mỗi thẻ có ảnh minh họa, tên, tác giả, giá và liên kết tìm kiếm trên Tiki.
Có tiêu đề, thanh điều hướng và khu vực giới thiệu.
CSS thiết lập bố cục 4, 2 hoặc 1 cột theo chiều rộng màn hình.
Đây là giao diện thực hành; không có giỏ hàng hoặc thanh toán thật.
4. Công nghệ
HTML5: tổ chức nội dung bằng header, nav, main, section, article và footer.
CSS3: định dạng, CSS Grid, Flexbox và Media Queries.
SVG: ảnh bìa minh họa tự tạo bằng mã, không sao chép bìa sách từ Tiki.
Không sử dụng backend, cơ sở dữ liệu hoặc thư viện bên ngoài.
5. Cách chạy
Đặt index.html và style.css cùng thư mục; thư mục images/ nằm cạnh hai file này.
Mở index.html bằng trình duyệt.
Kiểm tra ở kích thước máy tính và điện thoại bằng cách thay đổi cửa sổ hoặc dùng công cụ mô phỏng thiết bị.
Sau khi sửa mã, lưu file và làm mới trang.
Ảnh SVG được lưu trong dự án nên không cần mạng để hiển thị. Các liên kết đến Tiki cần Internet.
6. Cải tiến đã thực hiện
Vấn đề từ khảo sát
Trong ảnh trang chi tiết sách Tiki đã khảo sát, các tiện ích nổi nằm chồng lên một phần khu vực nút thao tác bên phải. Đây là vấn đề cụ thể được dùng làm cơ sở để ưu tiên khu vực thao tác rõ ràng trong phiên bản thực hành.
Phương án thể hiện trong mã
Đặt liên kết thao tác ở cuối mỗi thẻ sách và hiển thị toàn chiều rộng phần nội dung thẻ.
Không đặt quảng cáo hoặc tiện ích nổi đè lên nút.
Tách tác giả, tên và giá thành các vùng thông tin rõ ràng.
Sử dụng CSS Grid và Media Queries để giảm số cột trên màn hình hẹp.
Đây là phương án thiết kế lại giao diện thực hành, chưa có đo lường để kết luận hiệu quả tốt hơn Tiki.
Điểm do người học tự phát hiện và điều chỉnh
Người học đã phản ánh rằng trang chưa có ảnh sách. Sau đó, AI cung cấp ảnh SVG lưu cục bộ và hướng dẫn thay đường dẫn ảnh trong HTML.
Cần cập nhật sau khi thực hiện: ghi rõ đã thay những đường dẫn nào, kiểm tra ảnh trên trình duyệt ra sao và kết quả thực tế. Chưa ghi nhận thay đổi này là hoàn tất khi chưa chạy lại trang.
7. Hỗ trợ từ AI
ChatGPT/Codex hỗ trợ khảo sát, cung cấp mã HTML/CSS ban đầu, tạo ảnh SVG và soạn tài liệu. Người học lựa chọn Tiki, tích hợp các tệp trong VS Code và chịu trách nhiệm kiểm tra, tự điều chỉnh và giải thích bài làm.
Chi tiết prompt, kết quả, giới hạn và tình trạng kiểm tra được ghi trong AI_USAGE.md. Các ảnh bìa và giá trên giao diện là dữ liệu minh họa, không phải bìa chính thức hoặc giá hiện tại.