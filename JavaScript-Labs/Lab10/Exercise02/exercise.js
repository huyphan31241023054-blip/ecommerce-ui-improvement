$(function () {
  $('#run').on('click', function () {
    $('#first').html('Tiêu đề mới');
    const message = $('#message');
    message.val('Class: ' + message.attr('class'));
    $('.center-icons').addClass('selected');
    $('#out').text('Số button được chọn: ' + $('button').length + '\nSố body được chọn: ' + $('body').length);
  });
});
