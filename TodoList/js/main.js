'use strict';

const formAddElt = document.querySelector('.todolist-add-form');
const listElt = document.querySelector('.todolist-list');

formAddElt.addEventListener('submit', function submitCb(e) {
  e.preventDefault();
  // e.currentTarget; // l'élément qui a déclenché cet Event (ici c'est le form)
  const saisi = formAddElt.todo.value;

  const divElt = document.createElement('div');
  //divElt.className = 'todolist-row';
  divElt.classList.add('todolist-row'); // PAS IE8
  divElt.innerHTML = `<b>${saisi}</b>`;

  if (listElt.children.length) {
    listElt.insertBefore(divElt, listElt.firstElementChild);
  }
  else {
    listElt.appendChild(divElt);
  }
});

// 1 - Ajouter un bouton - sur chaque ligne
// * écouter l'événement click
// * Element.prototype.removeChild()
// * Element.parentNode

// 2 - Ajouter une checkbox sur chaque ligne et une générale (dans le form)
// * <input type="checkbox">
// * Au click de la checkbox générale tout cocher/décocher
// * Element.prototype.querySelectorAll() (retourne un NodeList (pas un Array))
// * HTMLInputElement.checked = true (ou false pour décocher)