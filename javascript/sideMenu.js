var sideMenuHandler = new SideMenuHandler();

function SideMenuHandler() {
	var self = this;
	var burgerIcon = document.getElementById('burger-icon');

	(function init() {
		addEvents();
	})();

	function addEvents() {
		burgerIcon.addEventListener('click', function() {
			self.toggle();
		});
	}

	self.open = function() {
		burgerIcon.parentElement.classList.add('open');
		greyBGHandler.open();
		burgerIcon.classList.remove('hide');
	};

	self.close = function() {
		burgerIcon.parentElement.classList.remove('open');
		greyBGHandler.close();
	};

	self.toggle = function() {
		if (burgerIcon.parentElement.classList.contains('open')) {
			self.close();
		} else {
			self.open();
		}
	};
}
