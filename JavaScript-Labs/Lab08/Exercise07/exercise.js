const weekdays = ['Mon','Tues','Wed','Thur','Fri'];
weekdays.push('Sat');
weekdays.unshift('Sun');
const head = document.querySelector('#head');
for (const label of weekdays) {
  const cell = document.createElement('th');
  cell.scope = 'col';
  const text = label.length >= 4 ? document.createElement('em') : cell;
  text.textContent = label;
  if (text !== cell) cell.append(text);
  head.append(cell);
}
const table = document.querySelector('#days');
for (let week = 0; week < 5; week++) {
  const row = table.insertRow();
  for (let i = 0; i < 7; i++) {
    const date = week * 7 + i + 1;
    row.insertCell().textContent = date <= 30 ? date : '';
  }
}
