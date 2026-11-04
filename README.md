# Tiệm Sách Nhỏ — bài tập cá nhân Buổi 2

## Giới thiệu
Tiếp tục giao diện giới thiệu sách từ Buổi 1, tham khảo [Nhà Sách Tiki](https://tiki.vn/nha-sach-tiki/c8322). Khu vực tập trung: bốn thẻ sách nổi bật và menu. Ảnh bìa là minh họa, giá là dữ liệu mẫu; các liên kết dẫn đến kết quả tìm kiếm Tiki. Đây không phải website chính thức của Tiki.

## Trước khi cải thiện
Bản Buổi 1 được cung cấp có file style.css rỗng; vì vậy các quy tắc CSS được mô tả trong README cũ chưa được áp dụng trong bản này.

| Vấn đề | Hướng cải thiện | Kết quả mong muốn |
| --- | --- | --- |
| Chưa có CSS định dạng | Bổ sung style.css đã liên kết | Màu sắc, chữ và khoảng cách rõ ràng |
| Các thẻ sách nối tiếp theo luồng mặc định | Dùng Grid, border và padding | Các sách có bố cục và ranh giới rõ |
| Menu và tên cửa hàng chưa được căn chỉnh | Dùng Flexbox và gap | Các thành phần được sắp xếp hợp lý |

## Chạy trang
Mở index.html trong trình duyệt. style.css và images/ phải ở cùng thư mục với file HTML. Các ảnh SVG có sẵn cục bộ; liên kết Tiki cần Internet.

## Kỹ thuật và thay đổi
- Giữ cấu trúc HTML hiện có: header, nav, main, section, article, footer, các tiêu đề theo thứ bậc và thuộc tính alt.
- Bổ sung CSS riêng với element selector (body), class selector (.product-card) và descendant selector (.product-info h3). Thẻ sách có margin, padding, border và bo góc; dùng box-sizing: border-box.
- Flexbox căn tên cửa hàng và menu, đồng thời xếp thông tin trong thẻ sách; Grid bố trí 4, 2 hoặc 1 cột tùy chiều rộng. Hình dùng aspect-ratio và object-fit: cover, có thể cắt một phần ảnh để lấp đầy khung.
- Thêm trạng thái hover và focus-visible cho liên kết. Chưa có chức năng giỏ hàng hay thanh toán.

## Minh chứng và kiểm thử
Ảnh trước: images/minh-chung/truoc.png; ảnh sau: images/minh-chung/sau.png. Kiểm thử và vấn đề được ghi trong [BAO_CAO_BUOI_2.md](BAO_CAO_BUOI_2.md). Nhật ký sử dụng AI tại [AI_USAGE.md](AI_USAGE.md).

Repository: https://github.com/huyphan31241023054-blip/ecommerce-ui-improvement
