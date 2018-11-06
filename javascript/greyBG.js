function GreyBGHandler(onClickCallback) {
	var greyBG = document.getElementById('grey-bg');
	var burgerIcon = document.getElementById('burger-icon');

	(function init() {
		if (typeof onClickCallback !== 'function') onClickCallback = noop;

		greyBG.addEventListener('click', function() {
			onClickCallback();
		});
	})();

	this.open = function() {
		greyBG.classList.add('show');
		burgerIcon.classList.add('hide');
	};

	this.close = function() {
		greyBG.classList.remove('show');
		burgerIcon.classList.remove('hide');
	};

	function noop() {}
}
