const toggle = document.querySelector('#toggle');
const details = document.querySelector('#details');
const image = document.querySelector('#photo');
const result = document.querySelector('#out');
let hideTimer;
toggle.addEventListener('click', () => {
  clearTimeout(hideTimer);
  const hide = toggle.getAttribute('aria-expanded') === 'true';
  if (hide) {
    details.classList.add('fade');
    hideTimer = setTimeout(() => { details.hidden = true; }, 260);
  } else {
    details.hidden = false;
    requestAnimationFrame(() => {
      if (toggle.getAttribute('aria-expanded') === 'true') details.classList.remove('fade');
    });
  }
  toggle.textContent = hide ? 'Hiện mô tả' : 'Ẩn mô tả';
  toggle.setAttribute('aria-expanded', String(!hide));
  result.textContent = hide ? 'click → đã ẩn mô tả.' : 'click → đã hiện mô tả.';
});
image.addEventListener('mouseover', () => {
  image.classList.add('gray');
  result.textContent = 'mouseover → ảnh chuyển xám.';
});
image.addEventListener('mouseout', () => {
  image.classList.remove('gray');
  result.textContent = 'mouseout → ảnh trở lại màu gốc.';
});
