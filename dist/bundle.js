/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"styles/style.css\");\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setContactDOM\": () => (/* binding */ setContactDOM)\n/* harmony export */ });\nfunction setContactDOM() {\n  const h1 = document.createElement('h1');\n  const hr = document.createElement('hr');\n  const hr2 = document.createElement('hr');\n  const p = document.createElement('p');\n  const i = document.createElement('p');\n\n  i.classList.add('cursive');\n  i.textContent = 'Bienvenidos';\n  h1.textContent = 'NOSOTROS';\n  h1.classList.add('menu__h1');\n  const main = document.querySelector('main');\n  const div = document.createElement('div');\n  const container = document.createElement('div');\n  container.classList.add('container__div', 'contact-page');\n\n  p.textContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod';\n\n  main.append(div);\n  div.append(container);\n  container.append(i, h1, hr, hr2, p);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setHomeDOM\": () => (/* binding */ setHomeDOM)\n/* harmony export */ });\nconst Structure = (() => {\n  const main = document.querySelector('main');\n\n  const resetMain = () => {\n    const arr = main.querySelectorAll('*');\n    arr.forEach((element) => {\n      element.remove();\n    });\n  };\n  return { main, resetMain };\n})();\n\nfunction setHomeDOM() {\n  const h1 = document.createElement('h1');\n  const p = document.createElement('p');\n  const hr = document.createElement('hr');\n  const hr2 = document.createElement('hr');\n  const place = document.createElement('p');\n  const menuBtn = document.createElement('button');\n\n  p.classList.add('cursive');\n  p.textContent = 'Bienvenidos';\n  place.classList.add('place');\n  place.textContent = 'El placer de comer con las manos. Bien tierruo!';\n  h1.textContent = 'La Panaderia';\n  menuBtn.setAttribute('id', 'menu-btn');\n  menuBtn.textContent = 'Menu';\n\n  Structure.main.append(p);\n  Structure.main.append(h1);\n  Structure.main.append(hr);\n  Structure.main.append(hr2);\n  Structure.main.append(place);\n  Structure.main.append(menuBtn);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Structure);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/background.jpg */ \"./src/assets/background.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nconst bckgrImg = document.querySelector('.restaurant-front');\nbckgrImg.src = './assets/background.jpg';\n\nconst NavEventListener = (() => {\n  const listeners = document.querySelectorAll('nav>ul>li, #menu-btn');\n\n  listeners.forEach((listener) =>\n    listener.addEventListener('click', () => {\n      _home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetMain();\n      if (listener.textContent === 'Home') {\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.setHomeDOM)();\n        MenuBtnListener();\n      } else if (listener.textContent === 'Menu') {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.setMenuDOM)();\n      } else {\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.setContactDOM)();\n      }\n    })\n  );\n  return [listeners];\n})();\n\nfunction MenuBtnListener() {\n  const menuBtn = document.querySelector('#menu-btn');\n  menuBtn.addEventListener('click', () => NavEventListener[0][1].click());\n}\n\nwindow.onload = () => NavEventListener[0][0].click();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setMenuDOM\": () => (/* binding */ setMenuDOM)\n/* harmony export */ });\nfunction setMenuDOM() {\n  // Create elements\n  const container = document.createElement('div');\n  const menuItemContainer = document.createElement('div');\n  const backgroundContainer = document.createElement('div');\n  const h1 = document.createElement('h1');\n  const p = document.createElement('p');\n  const hr = document.createElement('hr');\n  const hr2 = document.createElement('hr');\n  const h21 = document.createElement('h2');\n  const h22 = document.createElement('h2');\n  const h23 = document.createElement('h2');\n  const p21 = document.createElement('p');\n  const h31 = document.createElement('h3');\n  const p22 = document.createElement('p');\n  const h32 = document.createElement('h3');\n  const p23 = document.createElement('p');\n  const h33 = document.createElement('h3');\n  const hr31 = document.createElement('hr');\n  const hr32 = document.createElement('hr');\n  const hr33 = document.createElement('hr');\n\n  // Add classes\n  container.classList.add('container__div');\n  menuItemContainer.classList.add('menu-item-container');\n  h1.classList.add('menu__h1');\n  p.classList.add('cursive');\n  h21.classList.add('menu-item__h2');\n  h22.classList.add('menu-item__h2');\n  h23.classList.add('menu-item__h2');\n\n  // Add text content\n  h1.textContent = 'MENU';\n  p.textContent = 'Bienvenidos';\n  h21.textContent = 'Pan sobado';\n  p21.textContent =\n    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed veniam quas labore! Iusto, cumque!';\n  h31.textContent = '$21';\n  h22.textContent = 'Pan Andino';\n  p22.textContent =\n    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed veniam quas labore! Iusto, cumque!';\n  h32.textContent = '$20';\n  h23.textContent = 'Pan canilla';\n  p23.textContent =\n    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed veniam quas labore! Iusto, cumque!';\n  h33.textContent = '$22';\n\n  // Append elements to DOM\n  const main = document.querySelector('main');\n  main.append(backgroundContainer);\n  backgroundContainer.append(container);\n  container.append(p, h1, hr, hr2);\n  container.append(menuItemContainer);\n  menuItemContainer.append(\n    h21,\n    p21,\n    h31,\n    hr31,\n    h22,\n    p22,\n    h32,\n    hr32,\n    h23,\n    p23,\n    h33,\n    hr33\n  );\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/background.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/background.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;