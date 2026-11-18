const form = document.querySelector('#sample');
const result = document.querySelector('#out');
form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = Array.from(form.querySelectorAll('input[type=text], input[type=password]'));
  const missing = fields.filter(field => !field.value.trim());
  fields.forEach(field => field.setAttribute('aria-invalid', String(missing.includes(field))));
  if (missing.length) {
    result.className = 'output bad';
    result.textContent = 'Vui lòng điền: ' + missing.map(field => field.name === 'account' ? 'tài khoản' : 'mật khẩu').join(', ') + '.';
    missing[0].focus();
  } else {
    result.className = 'output good';
    result.textContent = 'Dữ liệu hợp lệ. Đây là biểu mẫu minh họa, kết quả kiểm tra hiển thị ngay trên trang.';
  }
});
