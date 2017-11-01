var toggle = function(el) {
	let click = function(item, e) {
		e.stopPropagation();
		e.preventDefault();

		let toggleClass = (item.getAttribute('data-class') ? item.getAttribute('data-class') : 'is-open');

		// Target
		let target = (item.getAttribute('data-target') ? document.querySelector(item.getAttribute('data-target')) : item);
		let toggleGroup = (item.getAttribute('data-group') ? item.getAttribute('data-group') : null);

		// Blur target (if any)
		let blurTarget = (item.getAttribute('data-blur') ? document.querySelector(item.getAttribute('data-blur')) : null);
		let blurToggleClass = (item.getAttribute('data-blurClass') ? item.getAttribute('data-blurClass') : 'is-blur');

		if (target.classList.contains(toggleClass)) {
			target.classList.remove(toggleClass);
		} else {
			if (toggleGroup) {
				let toggleGroupItems = el.querySelectorAll('[data-group='+toggleGroup+'].'+toggleClass);
				for (i=0; i < toggleGroupItems.length; i++) {
					let toggleGroupItem = toggleGroupItems[i];
					toggleGroupItem.classList.remove(toggleClass);
				}
			}

			target.classList.add(toggleClass);

			if (blurTarget) {
				blurTarget.classList.add(blurToggleClass);

				// Do not trigger blurTarget click when clicking on target
				let onTargetClick = function(e) {
					e.stopPropagation();
				};

				target.addEventListener('mouseup', onTargetClick);

				let onBlur = function(e) {
					e.stopPropagation();
					e.preventDefault();

					target.classList.remove(toggleClass);
					blurTarget.classList.remove(blurToggleClass);

					target.removeEventListener('mouseup', onTargetClick);
					blurTarget.removeEventListener('mouseup', onBlur);
				};

				blurTarget.addEventListener('mouseup', onBlur);
			}
		}
	};

	let items = el.querySelectorAll('.js-toggle');

	for (let i=0; i < items.length; i++) {
		let item = items[i];

		if (item.classList.contains('js-toggle-init')) continue;
		item.classList.add('js-toggle-init');

		item.addEventListener('mouseup', function(e) {
			click(this, e);
		});
	}
}; // toggle

export default toggle;
