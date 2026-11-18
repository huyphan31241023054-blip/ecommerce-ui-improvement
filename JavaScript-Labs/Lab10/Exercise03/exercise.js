$(function () {
  $('#run').on('click', function () {
    const password = $('form :password').addClass('selected');
    const everyFourth = $('form :nth-child(4n)').css('background-color', '#ffe99a');
    const label = $('label:contains("word")').css({color:'#141414', fontWeight:'700'});
    $('#out').text(':password → ' + password.length + '\n:nth-child(4n) → ' + everyFourth.length + '\n:contains("word") → ' + label.length);
  });
  $('form').on('submit', e => e.preventDefault());
});
