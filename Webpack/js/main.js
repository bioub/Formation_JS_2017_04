'use strict';

import {Horloge} from './horloge';
import $ from 'bootstrap';

const div = document.querySelector('.horloge');
const horloge = new Horloge(div);
horloge.start();
