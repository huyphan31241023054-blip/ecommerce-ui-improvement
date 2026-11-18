var count = 1;
var output = 'Count = ' + count;
document.querySelector('#run').addEventListener('click', () => {
  const temp = count * 7;
  console.log(output, {count, temp});
  console.warn('Ví dụ cảnh báo.');
  console.error('Ví dụ thông báo lỗi.');
  document.querySelector('#out').textContent = output + '\ntemp = ' + temp + '\nĐã ghi log, warn và error vào Console.';
});
document.querySelector('#debug').addEventListener('click', () => {
  try {
    doccumment.querySelector('#out'); // Cố ý viết sai để quan sát ReferenceError.
  } catch (error) {
    console.error(error);
    document.querySelector('#out').textContent = error.name + ': ' + error.message;
  }
});
