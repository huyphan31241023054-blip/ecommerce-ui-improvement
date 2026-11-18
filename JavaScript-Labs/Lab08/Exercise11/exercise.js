function Country(name, iso, capital, population) {
  this.name = name;
  this.iso = iso;
  this.capital = capital;
  this.population = population;
}
// Dữ liệu mẫu từ tài liệu Lab, không phải số dân hiện hành.
const countries = [
  new Country('Bahamas','BS','Nassau',301790),
  new Country('Canada','CA','Ottawa',33679000),
  new Country('Germany','DE','Berlin',81802257)
];
countries.push(new Country('Spain','ES','Madrid',46505963));
countries.push(new Country('United Kingdom','GB','London',62348447));
for (const country of countries) {
  const card = document.createElement('article');
  card.className = 'tile';
  const img = document.createElement('img');
  img.src = '../../assets/' + country.iso + '.png';
  img.width = 48;
  img.alt = 'Cờ ' + country['name'];
  card.append(img);
  for (const property in country) {
    const line = document.createElement('div');
    line.textContent = property + ': ' + country[property];
    card.append(line);
  }
  document.querySelector('#out').append(card);
}
