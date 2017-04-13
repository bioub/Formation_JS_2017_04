// Module : permet de créer une portée pour le fichier
// IIFE
// Immediately Invoked Function Expression
(function () {
  'use strict';

  const div = document.querySelector('.horloge');
  const horloge = new ORSystem.Horloge(div);
  horloge.start();
}());
