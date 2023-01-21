export function setMenuDOM() {
  // Create elements
  const container = document.createElement('div');
  const menuItemContainer = document.createElement('div');
  const backgroundContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const hr = document.createElement('hr');
  const hr2 = document.createElement('hr');
  const h21 = document.createElement('h2');
  const h22 = document.createElement('h2');
  const h23 = document.createElement('h2');
  const p21 = document.createElement('p');
  const h31 = document.createElement('h3');
  const p22 = document.createElement('p');
  const h32 = document.createElement('h3');
  const p23 = document.createElement('p');
  const h33 = document.createElement('h3');
  const hr31 = document.createElement('hr');
  const hr32 = document.createElement('hr');
  const hr33 = document.createElement('hr');

  // Add classes
  container.classList.add('container__div');
  menuItemContainer.classList.add('menu-item-container');
  h1.classList.add('menu__h1');
  p.classList.add('cursive');
  h21.classList.add('menu-item__h2');
  h22.classList.add('menu-item__h2');
  h23.classList.add('menu-item__h2');

  // Add text content
  h1.textContent = 'MENU';
  p.textContent = 'Bienvenidos';
  h21.textContent = 'Pan sobado';
  p21.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed veniam quas labore! Iusto, cumque!';
  h31.textContent = '$21';
  h22.textContent = 'Pan Andino';
  p22.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed veniam quas labore! Iusto, cumque!';
  h32.textContent = '$20';
  h23.textContent = 'Pan canilla';
  p23.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed veniam quas labore! Iusto, cumque!';
  h33.textContent = '$22';

  // Append elements to DOM
  const main = document.querySelector('main');
  main.append(backgroundContainer);
  backgroundContainer.append(container);
  container.append(p, h1, hr, hr2);
  container.append(menuItemContainer);
  menuItemContainer.append(
    h21,
    p21,
    h31,
    hr31,
    h22,
    p22,
    h32,
    hr32,
    h23,
    p23,
    h33,
    hr33
  );
}
