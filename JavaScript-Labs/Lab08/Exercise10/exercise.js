const basic = new Object();
basic.product = 'Bản in A';
basic.price = 12;
basic.quantity = 2;
basic.total = function () { return this.price * this.quantity; };
const literal = {
  product: 'Bản in B', price: 10, quantity: 3,
  total() { return this.price * this.quantity; }
};
function Order(product, price, quantity) {
  this.product = product;
  this.price = price;
  this.quantity = quantity;
}
Order.prototype.total = function () { return this.price * this.quantity; };
const orders = [
  ['new Object()', basic], ['Object literal', literal],
  ['Constructor', new Order('Self Portrait in a Straw Hat', 15, 2)],
  ['Constructor', new Order('Untitled #23', 10, 4)]
];
for (const [method, order] of orders) {
  const card = document.createElement('pre');
  card.textContent = method + '\n' + order.product + '\n$' + order.price + ' × ' + order.quantity + '\nTotal: $' + order.total().toFixed(2);
  document.querySelector('#out').append(card);
}
