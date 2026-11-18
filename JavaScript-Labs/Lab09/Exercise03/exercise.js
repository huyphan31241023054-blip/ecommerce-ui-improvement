document.querySelector('#run').addEventListener('click', event => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode('Đoạn văn do JavaScript tạo.'));
  document.querySelector('#first').appendChild(paragraph);
  const removed = document.querySelector('#remove');
  removed.parentNode.removeChild(removed);
  document.querySelector('#out').textContent = 'Đã thêm 1 đoạn văn và xóa 1 mục.';
  event.currentTarget.disabled = true;
});
