$(function () {
  const images = $('figure img');
  function removePreview() {
    images.removeClass('gray');
    $('#preview').remove();
  }
  function move(event) {
    const preview = $('#preview');
    if (!preview.length) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || bounds.right;
    const y = event.clientY || bounds.top;
    preview.css({
      left: Math.max(8, Math.min(x + 16, innerWidth - preview.outerWidth() - 8)),
      top: Math.max(8, Math.min(y + 16, innerHeight - preview.outerHeight() - 8))
    });
  }
  images.on('mouseenter focus', function (event) {
    removePreview();
    const thumb = $(this);
    const label = thumb.attr('alt');
    const source = thumb.attr('src').replace('/small/', '/medium/');
    $('<div>', {id:'preview', class:'preview'}).css('position','fixed')
      .append($('<img>', {src:source, alt:''}), $('<p>').text(label))
      .hide().appendTo('body').fadeIn(250);
    thumb.addClass('gray');
    move(event);
    $('#out').text('Đang xem trước: ' + label);
  }).on('mousemove', move).on('mouseleave blur', removePreview);
});
