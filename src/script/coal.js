// Init Coal
let behaviors = {};

let browserSupport = function(){
	let htmlElement = document.documentElement;

	htmlElement.classList.add('js');

	if (htmlElement.style.hasOwnProperty('transform')) {
		htmlElement.classList.add('css-transform');
	}

	if (htmlElement.style.hasOwnProperty('transition')) {
		htmlElement.classList.add('css-transition');
	}

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		htmlElement.classList.add('mobile');
	}

};

let attachBehaviors = function(el){
	for (let func in Coal.behaviors){
		if (Coal.behaviors.hasOwnProperty(func)){
			let obj = Coal.behaviors[func];
			obj(el);
		}
	};
}; // Coal.attachBehaviors

let init = function(el){
	browserSupport();
	attachBehaviors(el);
}; // Coal.init


exports.behaviors = behaviors;
exports.browserSupport = browserSupport;
exports.attachBehaviors = attachBehaviors;
exports.init = init;
