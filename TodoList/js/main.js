'use strict';

import {getContactList} from './requetes';

const formAddElt = document.querySelector('.todolist-add-form');
const listElt = document.querySelector('.todolist-list');
const checkboxToggleElt = document.querySelector('.todolist-toggle');

const ajouterTodo = function({id = 0, content = '', done = false} = {}) {
  const divElt = document.createElement('div');
  //divElt.className = 'todolist-row';
  divElt.classList.add('todolist-row'); // PAS IE8
  divElt.innerHTML = `<b>${content}</b>`;
  divElt.dataset.id = id;

  // Checkbox
  const checkboxElt = document.createElement('input');
  checkboxElt.type = 'checkbox';
  checkboxElt.className = 'todolist-done';
  checkboxElt.checked = done;
  divElt.insertBefore(checkboxElt, divElt.firstElementChild);

  // Bouton Moins
  const btnMoinsElt = document.createElement('button');
  btnMoinsElt.innerText = '-';
  btnMoinsElt.addEventListener('click', function deleteCb() {
    listElt.removeChild(divElt);
  });
  divElt.appendChild(btnMoinsElt);

  if (listElt.children.length) {
    listElt.insertBefore(divElt, listElt.firstElementChild);
  }
  else {
    listElt.appendChild(divElt);
  }
};

// 1 - Faire la requete DELETE http://localhost:3000/todos/1
// au clic du bouton moins
// 2 - A l'ajout faire la req POST http://localhost:3000/todos
// Dans la requete ajouter le header Content-type: application/json
// xhr.send(json)


getContactList(function(todos) {
  for (let todo of todos) {
    ajouterTodo(todo);
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
  const saisi = formAddElt.todo.value;

  ajouterTodo({
    content: saisi
  });
});

checkboxToggleElt.addEventListener('change', function toggleAllCb() {
  const checkboxes = listElt.querySelectorAll('.todolist-done');

  for (let checkbox of checkboxes) {
    checkbox.checked = checkboxToggleElt.checked;
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