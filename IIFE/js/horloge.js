(function() {
  'use strict';

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

  window.Horloge = Horloge;
}());
