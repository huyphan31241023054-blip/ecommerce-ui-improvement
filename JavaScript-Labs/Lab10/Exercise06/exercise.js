$(function () {
  $('[data-effect]').on('click', function () {
    const method = $(this).data('effect');
    $('figure').stop(true,true)[method](350, function () {
      $('#out').text(method + ' hoàn tất. Ảnh ' + ($(this).is(':visible') ? 'đang hiển thị.' : 'đã ẩn.'));
    });
  });
});
