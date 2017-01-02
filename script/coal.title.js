Coal.behaviors.title = function(el) {
	var titleClass = 'title';

	var titleItemElement = document.createElement('div');
	titleItemElement.setAttribute('class', titleClass);

	var hover = function(item, e) {
		var titleItem = item.querySelector('.'+titleClass);
		titleItem.classList.remove('is-hidden');
	};

	var leave = function(item, e) {
		var titleItem = item.querySelector('.'+titleClass);
		titleItem.classList.add('is-hidden');
	};

	var items = el.querySelectorAll('[title]');
	for (var i=0; i < items.length; i++) {
		var item = items[i];

		if (item.classList.contains('js-title-init')) continue;
		item.classList.add('js-title-init');

		var titleItem = titleItemElement.cloneNode();

		titleItem.classList.add('is-hidden');
		titleItem.innerHTML = item.getAttribute('title');
		item.appendChild(titleItem);

		item.removeAttribute('title');

		var hoverEvent = function(e) {
			hover(this, e);
		};

		var leaveEvent = function(e) {
			leave(this, e);
		};

		item.addEventListener('mouseover', hoverEvent);
		item.addEventListener('mouseout', leaveEvent);
	}
}; // title
