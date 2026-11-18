const boxClass = 'box';
function outputBox(number) {
  const box = document.createElement('div');
  box.id = 'div' + number;
  box.className = boxClass;
  box.textContent = 'This is div ' + number;
  return box;
}
const boxes = document.querySelector('#boxes');
for (let number = 1; number <= 5; number++) boxes.append(outputBox(number));
document.querySelector('#out').textContent = 'Đã tạo ' + boxes.children.length + ' hộp. Bên ngoài hàm, typeof box = ' + typeof box;
