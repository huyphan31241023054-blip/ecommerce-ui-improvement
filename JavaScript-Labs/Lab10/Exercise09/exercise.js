$(function () {
  $('#get').on('click', function () {
    const results = $('#results').empty();
    $('#out').text('Đang tải…');
    $.get('../../data/cities.json', function (cities, status) {
      if (status === 'success') {
        $.each(cities, (index, city) => $('<li>').text(city.name).appendTo(results));
        $('#out').text('GET thành công. Đã nhận ' + cities.length + ' thành phố.');
      }
    }, 'json').fail(() => $('#out').text('Không tải được JSON. Hãy mở trang qua HTTP, chẳng hạn Live Server.'));
  });
});
