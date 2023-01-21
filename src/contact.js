export function setContactDOM() {
  const h1 = document.createElement('h1');
  h1.textContent = 'La Panaderia Contact';
  const main = document.querySelector('main');
  main.append(h1);
}
