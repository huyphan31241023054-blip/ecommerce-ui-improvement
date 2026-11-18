const fields = document.querySelectorAll('#sample input[type=text], #sample input[type=password]');
for (const field of fields) {
  for (const type of ['focus','blur']) {
    field.addEventListener(type, event => {
      event.target.classList.toggle('selected', event.type === 'focus');
      document.querySelector('#out').textContent = event.type + ': ' + event.target.name;
    });
  }
}
document.querySelector('#sample').addEventListener('submit', event => event.preventDefault());
