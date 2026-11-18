const a = new String('Test');
const b = 'Test';
const c = 'Test';
const d = new String('Test');
const lines = [
  'typeof a = ' + typeof a, 'typeof c = ' + typeof c,
  'a == b: ' + (a == b), 'a == d: ' + (a == d),
  'a === b: ' + (a === b), 'b === c: ' + (b === c), 'b === d: ' + (b === d),
  'Date: ' + new Date().toLocaleDateString('vi-VN'),
  'Math.PI = ' + Math.PI, 'Math.sqrt(4) = ' + Math.sqrt(4),
  'Math.random() = ' + Math.random().toFixed(6)
];
document.querySelector('#out').textContent = lines.join('\n');
