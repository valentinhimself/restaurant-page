export function setContactDOM() {
  const h1 = document.createElement('h1');
  const hr = document.createElement('hr');
  const hr2 = document.createElement('hr');
  const p = document.createElement('p');
  const i = document.createElement('p');

  i.classList.add('cursive');
  i.textContent = 'Bienvenidos';
  h1.textContent = 'NOSOTROS';
  h1.classList.add('menu__h1');
  const main = document.querySelector('main');
  const div = document.createElement('div');
  const container = document.createElement('div');
  container.classList.add('container__div', 'contact-page');

  p.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod';

  main.append(div);
  div.append(container);
  container.append(i, h1, hr, hr2, p);
}
