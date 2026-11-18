$(function () {
  const buttons = $('[data-file]');
  const status = $('#out');
  buttons.on('click', function () {
    const url = '../../data/' + $(this).data('file');
    const results = $('#results').empty();
    buttons.prop('disabled', true);
    $('#loading').prop('hidden', false);
    status.text('');
    $.get({url, dataType:'json', timeout:8000})
      .done(function (cities, textStatus, response) {
        $.each(cities, (index, city) => $('<li>').text(city.name).appendTo(results));
        status.attr('class','output good').text('done: HTTP ' + response.status + ' · ' + cities.length + ' thành phố.');
      })
      .fail(function (response, textStatus) {
        status.attr('class','output bad').text('fail: ' + (response.status ? 'HTTP ' + response.status : textStatus));
      })
      .always(function () {
        $('#loading').prop('hidden', true);
        buttons.prop('disabled', false);
        status.append(' always: đã kết thúc trạng thái tải.');
      });
  });
});
