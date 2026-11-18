$(function () {
  const panel = $('#panel');
  const message = $('#out');
  panel.on('click', function () { message.text('Đã nhấp vào khung.'); })
    .on('mousemove', function (event) {
      message.text('x = ' + event.pageX + ', y = ' + event.pageY);
    })
    .on('mouseout', function () { message.text('Con trỏ đã rời khung.'); })
    .on('keydown', function (event) {
      if (event.key === 'Enter') message.text('Đã kích hoạt khung bằng bàn phím.');
    });
  $('#stop').on('click', function () {
    panel.off('mousemove');
    message.text('Đã dừng theo dõi tọa độ.');
  });
});
