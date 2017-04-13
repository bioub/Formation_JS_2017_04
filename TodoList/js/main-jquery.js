'use strict';

import $ from 'jquery';

const $formAddElt = $('.todolist-add-form');
const $listElt = $('.todolist-list');
const $checkboxToggleElt = $('.todolist-toggle');

/*
const deleteCb = function (e) {
  e.currentTarget.parentNode.parentNode.removeChild(
    e.currentTarget.parentNode
  );
};
*/

$formAddElt.on('submit', function submitCb(e) {
  e.preventDefault();
  // e.currentTarget; // l'élément qui a déclenché cet Event (ici c'est le form)
  const saisi = $formAddElt.find('input[name="todo"]').val();

  const $divElt = $('<div class="todolist-row"></div>');
  $divElt.html(`<b>${saisi}</b>`);

  // Checkbox
  const $checkboxElt = $('<input type="checkbox" class="todolist-done">');
  $divElt.prepend($checkboxElt);

  // Bouton Moins
  const $btnMoinsElt = $('<button class="todolist-remove">-</button>');
  $divElt.append($btnMoinsElt);

  $listElt.prepend($divElt);
});

$(document).on('click', '.todolist-remove', function deleteCb(e) {
  $(e.currentTarget).parent().remove();
});

$checkboxToggleElt.on('change', function toggleAllCb() {
  const $checkboxes = $('.todolist-done');
  $checkboxes.prop('checked', $checkboxToggleElt.prop('checked'));
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