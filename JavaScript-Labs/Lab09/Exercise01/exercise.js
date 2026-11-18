document.querySelector('#run').addEventListener('click', () => {
  const title = document.getElementById('pageTitle');
  title.textContent = 'Tiêu đề được cập nhật';
  const counts = Array.from(document.getElementsByClassName('count-number'), item => item.textContent);
  const tags = document.getElementsByTagName('article').length;
  const first = document.querySelector('#first p').textContent;
  const paragraphs = document.querySelectorAll('#first p').length;
  const features = document.getElementById('features');
  features.setAttribute('aria-label','Số liệu cập nhật');
  features.style.backgroundColor = '#d7f0c5';
  document.querySelector('#out').textContent = 'Số article: ' + tags + '\nCounts: ' + counts.join(', ') +
    '\nĐoạn đầu: ' + first + '\nTổng đoạn trong #first: ' + paragraphs;
});
