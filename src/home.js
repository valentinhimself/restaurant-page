const Structure = (() => {
  const main = document.querySelector('main');

  const resetMain = () => {
    const arr = main.querySelectorAll('*');
    arr.forEach((element) => {
      element.remove();
    });
  };
  return { main, resetMain };
})();

export function setHomeDOM() {
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const hr = document.createElement('hr');
  const hr2 = document.createElement('hr');
  const place = document.createElement('p');
  const menuBtn = document.createElement('button');

  p.classList.add('cursive');
  p.textContent = 'Bienvenidos';
  place.classList.add('place');
  place.textContent = 'El placer de comer con las manos. Bien tierruo!';
  h1.textContent = 'La Panaderia';
  menuBtn.setAttribute('id', 'menu-btn');
  menuBtn.textContent = 'Menu';

  Structure.main.append(p);
  Structure.main.append(h1);
  Structure.main.append(hr);
  Structure.main.append(hr2);
  Structure.main.append(place);
  Structure.main.append(menuBtn);
}

export default Structure;
