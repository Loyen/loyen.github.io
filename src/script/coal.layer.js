var layer = function(el) {
	let classes = {
		'layer': 'layer',
		'layerContent': 'layer-content',
		'layerOpen': 'isOpen',
		'layerActive': 'isActive',
		'layerInactive': 'isInactive'
	};

	let layerElement = document.createElement('div');
	layerElement.setAttribute('class', classes.layer);

	let layerContentElement = document.createElement('div');
	layerContentElement.setAttribute('class', classes.layerContent);

	let create = function(id, content) {
		let newLayer = layerElement.cloneNode();
		let newContent = layerContentElement.cloneNode();

		newContent.innerHTML = content;

		newLayer.appendChild(newContent);

		let body = document.querySelector('body');
		body.appendChild(newLayer);
	};


	let open = function(item, x, y) {

	};

	let close = function(item, e) {

	};

	let items = el.querySelectorAll('.js-layer');
	for (let i=0; i < items.length; i++) {
		let item = items[i];

		if (item.classList.contains('js-layer-init')) continue;
		item.classList.add('js-layer-init');

		let openEvent = function(e) {
		};

		let closeEvent = function(e) {
		};

		let layerActive = function(e) {
		};

		let layerInactiveEvent = function(e) {
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

export default layer;
