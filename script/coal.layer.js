Coal.behaviors.layer = function(el) {
	var classes = {
		'layer': 'layer',
		'layerContent': 'layer-content',
		'layerOpen': 'isOpen',
		'layerActive': 'isActive',
		'layerInactive': 'isInactive'
	};

	var layerElement = document.createElement('div');
	layerElement.setAttribute('class', classes.layer);

	var layerContentElement = document.createElement('div');
	layerContentElement.setAttribute('class', classes.layerContent);

	var create = function(id, content) {
		var newLayer = layerElement.cloneNode();
		var newContent = layerContentElement.cloneNode();

		newContent.innerHTML = content;

		newLayer.appendChild(newContent);

		var body = document.querySelector('body');
		body.appendChild(newLayer);
	};


	var open = function(item, x, y) {

	};

	var close = function(item, e) {

	};

	var items = el.querySelectorAll('.js-layer');
	for (var i=0; i < items.length; i++) {
		var item = items[i];

		if (item.classList.contains('js-layer-init')) continue;
		item.classList.add('js-layer-init');

		var openEvent = function(e) {
		};

		var closeEvent = function(e) {
		};

		var layerActive = function(e) {
		};

		var layerInactiveEvent = function(e) {
		};

		if (document.documentElement.classList.contains('mobile')) {
			item.addEventListener('touchstart', touchEvent);
			item.addEventListener('touchend', touchReleaseEvent);
			item.addEventListener('touchcancel', touchReleaseEvent);
		} else {
			item.addEventListener('mouseleave', layerInactiveEvent);
			item.addEventListener('mouseup', releaseEvent);
		}
	}
}; // ripple
