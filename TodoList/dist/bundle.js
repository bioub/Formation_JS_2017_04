/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formAddElt = document.querySelector('.todolist-add-form');
var listElt = document.querySelector('.todolist-list');
var checkboxToggleElt = document.querySelector('.todolist-toggle');

/*
const deleteCb = function (e) {
  e.currentTarget.parentNode.parentNode.removeChild(
    e.currentTarget.parentNode
  );
};
*/

formAddElt.addEventListener('submit', function submitCb(e) {
  e.preventDefault();
  // e.currentTarget; // l'élément qui a déclenché cet Event (ici c'est le form)
  var saisi = formAddElt.todo.value;

  var divElt = document.createElement('div');
  //divElt.className = 'todolist-row';
  divElt.classList.add('todolist-row'); // PAS IE8
  divElt.innerHTML = '<b>' + saisi + '</b>';

  // Checkbox
  var checkboxElt = document.createElement('input');
  checkboxElt.type = 'checkbox';
  checkboxElt.className = 'todolist-done';
  divElt.insertBefore(checkboxElt, divElt.firstElementChild);

  // Bouton Moins
  var btnMoinsElt = document.createElement('button');
  btnMoinsElt.innerText = '-';
  btnMoinsElt.addEventListener('click', function deleteCb() {
    listElt.removeChild(divElt);
  });
  divElt.appendChild(btnMoinsElt);

  if (listElt.children.length) {
    listElt.insertBefore(divElt, listElt.firstElementChild);
  } else {
    listElt.appendChild(divElt);
  }
});

checkboxToggleElt.addEventListener('change', function toggleAllCb() {
  var checkboxes = listElt.querySelectorAll('.todolist-done');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = checkboxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var checkbox = _step.value;

      checkbox.checked = checkboxToggleElt.checked;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

// 1 - Ajouter un bouton - sur chaque ligne
// * écouter l'événement click
// * Element.prototype.removeChild()
// * Element.parentNode

// 2 - Ajouter une checkbox sur chaque ligne et une générale (dans le form)
// * <input type="checkbox">
// * Au click de la checkbox générale tout cocher/décocher
// * ParentNode.prototype.querySelectorAll() (retourne un NodeList (pas un Array))
// * HTMLInputElement.checked = true (ou false pour décocher)

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map