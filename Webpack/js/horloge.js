'use strict';

import moment from 'moment';

export class Horloge {
  constructor(container) {
    this.container = container;
  }
  update() {
    const now = new Date();
    this.container.innerText = moment().format('HH:mm:ss');
  }
  start() {
    this.update();
    setInterval(this.update.bind(this), 1000);
  }
}

