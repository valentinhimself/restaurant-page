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
  h1.textContent = 'La Panaderia';
  Structure.main.append(h1);
}

export default Structure;
