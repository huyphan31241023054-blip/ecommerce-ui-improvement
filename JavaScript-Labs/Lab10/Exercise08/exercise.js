$(function () {
  $('#animate').on('click', function () {
    const box = $('#box');
    const left = Math.min(495, box.parent().innerWidth() - box.outerWidth() - 8);
    const height = box.parent().innerHeight();
    const top = Math.min(400, Math.floor(height * .45));
    const finalHeight = Math.min(200, height - top - 8);
    $('#out').text('Đang chạy ba bước.');
    box.stop(true,false).css({left:8, top:8, opacity:.55, height:39})
      .animate({left, opacity:1, height:50}, 400)
      .animate({top, opacity:.2}, 400)
      .animate({height:finalHeight}, 800, () => {
        $('#out').text('Hoàn tất 3 bước: đổi vị trí ngang, đổi vị trí dọc, tăng chiều cao.');
      });
  });
});
