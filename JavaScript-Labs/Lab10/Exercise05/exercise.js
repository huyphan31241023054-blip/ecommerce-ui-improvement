$(function () {
  $('#insert').on('click', function () {
    $('.inserted').remove();
    const image = $('<img>', {
      src:'../../assets/13030.jpg', alt:'Tranh từ bộ Lab', class:'image inserted'
    });
    const panel = $('#panel');
    const method = $('#method').val();
    if (['appendTo','prependTo','insertBefore'].includes(method)) {
      image[method](panel);
    } else {
      panel[method](image);
    }
    $('#out').text('Đã chèn ảnh bằng ' + method + '().');
  });
});
