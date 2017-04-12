const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1 - utiliser le raccourci de méthode ES5 comme pour le get
const Random = {
  get() {
    return Math.random();
  },
  getArbitrary: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getInt: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

// 2 - Utiliser le mot-clé class plutot que la fonction constructeur + prototype
// 3 - utiliser la valeur par défaut pour options
// 5 - facultatif
// remplacer options par Destructuring Assignment Object
// voir : https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6/
const Jeu = function(options) {
  options = options || {};
  this._min = options.min || 0;
  this._max = options.max || 100;
  this._entierAlea = Random.getIntInclusive(this._min, this._max);
  this._essais = [];
};

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    // 4 - Utiliser une template string
    console.log('Vous avez déjà joué : ' + this._essais.join(', '));
  }

  // 4 - Utiliser une template string et rajouter min et max dans la question
  rl.question('Quel est le nombre ? ', saisie => {

    const entierSaisi = Number.parseInt(saisie);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné');
    rl.close();
  });
};

const jeu = new Jeu({
  min: 5,
  max: 10
});

  jeu.jouer();
