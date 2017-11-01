/* JS */

import Coal from './script/coal.js';
import CoalLayer from './script/coal.layer.js';
import CoalRipple from './script/coal.ripple.js';
import CoalTitle from './script/coal.title.js';
import CoalToggle from './script/coal.toggle.js';

window.Coal = Coal;

Coal.behaviors.layer = CoalLayer;
Coal.behaviors.ripple = CoalRipple;
Coal.behaviors.title = CoalTitle;
Coal.behaviors.toggle = CoalToggle;

document.addEventListener("DOMContentLoaded", function(e) {
	Coal.init(document.documentElement);
});


/* CSS */

require('./style/all.css')
