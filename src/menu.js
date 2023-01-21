export function setMenuDOM() {
  const h1 = document.createElement('h1');
  h1.textContent = 'La Panaderia Menu';
  const main = document.querySelector('main');
  main.append(h1);
}
