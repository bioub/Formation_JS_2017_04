// 'use strict';

global.prenom = 'Romain';

const contact = {
  prenom: 'Eric'
};

const hello = function(p1, p2) {
  return 'Bonjour ' + p1 + ', ' + p2 + ' je suis ' + this.prenom;
};

console.log(hello('Toto', 'Titi')); // Bonjour je suis Romain
console.log(hello.call(contact, 'Toto', 'Titi'));  // Bonjour je suis Eric
console.log(hello.apply(contact, ['Toto', 'Titi']));  // Bonjour je suis Eric
console.log(hello.call(contact, ...['Toto', 'Titi']));  // Bonjour je suis Eric

// ES5
const helloContact = hello.bind(contact);
console.log(helloContact('Toto', 'Titi')); // Bonjour je suis Eric

