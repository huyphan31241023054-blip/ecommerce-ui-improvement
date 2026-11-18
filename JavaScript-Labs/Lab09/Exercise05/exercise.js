window.addEventListener('load', () => {
  const element = document.getElementById('div1');
  document.querySelector('#out').textContent = 'window.load đã chạy. div1 = ' + element.textContent;
});
