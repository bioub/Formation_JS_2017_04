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


var _requetes = __webpack_require__(1);

var formAddElt = document.querySelector('.todolist-add-form');
var listElt = document.querySelector('.todolist-list');
var checkboxToggleElt = document.querySelector('.todolist-toggle');

var ajouterTodo = function ajouterTodo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$id = _ref.id,
      id = _ref$id === undefined ? 0 : _ref$id,
      _ref$content = _ref.content,
      content = _ref$content === undefined ? '' : _ref$content,
      _ref$done = _ref.done,
      done = _ref$done === undefined ? false : _ref$done;

  var divElt = document.createElement('div');
  //divElt.className = 'todolist-row';
  divElt.classList.add('todolist-row'); // PAS IE8
  divElt.innerHTML = '<b>' + content + '</b>';
  divElt.dataset.id = id;

  // Checkbox
  var checkboxElt = document.createElement('input');
  checkboxElt.type = 'checkbox';
  checkboxElt.className = 'todolist-done';
  checkboxElt.checked = done;
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
};

// 1 - Faire la requete DELETE http://localhost:3000/todos/1
// au clic du bouton moins
// 2 - A l'ajout faire la req POST http://localhost:3000/todos
// Dans la requete ajouter le header Content-type: application/json
// xhr.send(json)


(0, _requetes.getContactList)(function (todos) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var todo = _step.value;

      ajouterTodo(todo);
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

  ajouterTodo({
    content: saisi
  });
});

checkboxToggleElt.addEventListener('change', function toggleAllCb() {
  var checkboxes = listElt.querySelectorAll('.todolist-done');

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = checkboxes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var checkbox = _step2.value;

      checkbox.checked = checkboxToggleElt.checked;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getContactList = exports.getContactList = function getContactList(cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/todos');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status < 300) {
      var todos = JSON.parse(xhr.responseText);

      cb(todos);
    }
  };
  xhr.send();
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map