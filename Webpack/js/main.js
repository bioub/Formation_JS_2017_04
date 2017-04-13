'use strict';

import {Horloge} from './horloge';

const div = document.querySelector('.horloge');
const horloge = new Horloge(div);
horloge.start();
