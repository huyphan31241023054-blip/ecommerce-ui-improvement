const canada = document.querySelector('#canada');
function calculateTax(amount, rate) {
  return amount * rate();
}
function render() {
  const subtotal = 15 * 2;
  const tax = calculateTax(subtotal, function () {
    return canada.checked ? 0.05 : 0;
  });
  document.querySelector('#out').textContent =
    'Tạm tính: $' + subtotal.toFixed(2) + '\nThuế: $' + tax.toFixed(2) +
    '\nTổng: $' + (subtotal + tax).toFixed(2);
}
canada.addEventListener('change', render);
render();
