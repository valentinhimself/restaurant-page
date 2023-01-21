import './styles/style.css';
import './assets/background.jpg';
import Structure, { setHomeDOM } from './home.js';
import { setMenuDOM } from './menu.js';
import { setContactDOM } from './contact.js';

const bckgrImg = document.querySelector('.restaurant-front');
bckgrImg.src = './assets/background.jpg';

window.Structure = Structure;
window.setHomeDOM = setHomeDOM;

const NavEventListener = (() => {
  const listeners = document.querySelectorAll('nav>ul>li, #menu-btn');

  listeners.forEach((listener) =>
    listener.addEventListener('click', () => {
      Structure.resetMain();
      if (listener.textContent === 'Home') {
        setHomeDOM();
        MenuBtnListener();
      } else if (listener.textContent === 'Menu') {
        setMenuDOM();
      } else {
        setContactDOM();
      }
    })
  );
  return [listeners];
})();

function MenuBtnListener() {
  const menuBtn = document.querySelector('#menu-btn');
  menuBtn.addEventListener('click', () => NavEventListener[0][1].click());
}
