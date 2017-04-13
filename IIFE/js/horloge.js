(function() {
  'use strict';

  const tmp  = '';

  class Horloge {
    constructor(container) {
      this.container = container;
    }
    update() {
      const now = new Date();
      this.container.innerText = `${now.getHours()}h${now.getMinutes()}m${now.getSeconds()}`;
    }
    start() {
      this.update();
      setInterval(this.update.bind(this), 1000);
    }
  }

  window.ORSystem = ORSystem || {};
  ORSystem.Horloge = Horloge;
}());
