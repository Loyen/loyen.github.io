var title = function(el) {
	let titleClass = 'title';

	let titleItemElement = document.createElement('div');
	titleItemElement.setAttribute('class', titleClass);

	let hover = function(item, e) {
		let titleItem = item.querySelector('.'+titleClass);
		titleItem.classList.remove('is-hidden');
	};

	let leave = function(item, e) {
		let titleItem = item.querySelector('.'+titleClass);
		titleItem.classList.add('is-hidden');
	};

	let items = el.querySelectorAll('[title]');
	for (let i=0; i < items.length; i++) {
		let item = items[i];

		if (item.classList.contains('js-title-init')) continue;
		item.classList.add('js-title-init');

		let titleItem = titleItemElement.cloneNode();

		titleItem.classList.add('is-hidden');
		titleItem.innerHTML = item.getAttribute('title');
		item.appendChild(titleItem);

		item.removeAttribute('title');

		let hoverEvent = function(e) {
			hover(this, e);
		};

		let leaveEvent = function(e) {
			leave(this, e);
		};

		item.addEventListener('mouseover', hoverEvent);
		item.addEventListener('mouseout', leaveEvent);
	}
}; // title

export default title;
