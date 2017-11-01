var ripple = function(el) {
	let classes = {
		'container': 'ripple',
		'ripple': 'ripple-wave',
		'rippleActive': 'active',
		'rippleInactive': 'inactive'
	};

	let rippleContainerElement = document.createElement('div');
	rippleContainerElement.setAttribute('class', classes.container);

	let rippleItemElement = document.createElement('div');
	rippleItemElement.setAttribute('class', classes.ripple);


	let click = function(item, e) {
		let rippleContainer = item.querySelector('.'+classes.container);
		if (!rippleContainer) {
			rippleContainer = rippleContainerElement.cloneNode();
			item.appendChild(rippleContainer);
		}

		let rippleItem = rippleItemElement.cloneNode();

		let rippleContainerWidth = rippleContainer.offsetWidth;
		let rippleContainerHeight = rippleContainer.offsetHeight;

		let clickX = e.offsetX;
		let clickY = e.offsetY;

		let rippleSize = 0;

		if (rippleContainerWidth > rippleContainerHeight) {
			rippleSize = rippleContainerWidth;
		} else {
			rippleSize = rippleContainerHeight;
		}

		rippleItem.style.width = rippleSize+'px';
		rippleItem.style.height = rippleSize+'px';

		rippleItem.style.left = clickX-(rippleSize/2)+'px';
		rippleItem.style.top = clickY-(rippleSize/2)+'px';

		setTimeout(function(){rippleItem.classList.add(classes.rippleActive);}, 1);

		rippleContainer.appendChild(rippleItem);
	};

	let release = function(item, e) {
		let rippleItems = item.querySelectorAll('.'+classes.ripple);
		for (let i=0; i < rippleItems.length; i++) {
			let rippleItem = rippleItems[i];

			if (rippleItem.classList.contains(classes.rippleInactive)) continue;

			rippleItem.classList.remove(classes.rippleActive);
			rippleItem.classList.add(classes.rippleInactive);

			setTimeout(function(){
				if (!rippleItem.parentElement) return;
				rippleItem.parentElement.removeChild(rippleItem);
			}, 1000);
		}
	};

	let items = el.querySelectorAll('.js-ripple');
	for (let i=0; i < items.length; i++) {
		let item = items[i];

		if (item.classList.contains('js-ripple-init')) continue;
		item.classList.add('js-ripple-init');

		let clickEvent = function(e) {
			click(this, e);
		};

		let releaseEvent = function(e) {
			release(this, e);
		};

		item.addEventListener('mousedown', clickEvent);
		item.addEventListener('mouseleave', releaseEvent);
		item.addEventListener('mouseup', releaseEvent);
	}
}; // ripple

export default ripple;
