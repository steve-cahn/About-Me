function ContactHandler(onOpenCallback) {
	// Variables Contat Form
	var contactBtns = document.querySelectorAll('.contact-btn');
	var contactForm = document.getElementById('contact-form-outer-wrapper');
	var closeContactForm = document.getElementById('close-contact-form');
	var contactFormWrapper = document.getElementById('contact-form-wrapper');
	var contactFormInputs = document.querySelectorAll('.contact-form-text');
	var submittedWrapper = document.getElementById('submitted-wrapper');
	var submittedLoader = document.getElementById('submitted-loader');
	var submittedMsg = document.getElementById('submitted-msg');

	var topSection = document.getElementsByTagName('header')[0];

	var self = this;

	(function init() {
		addEvents();
	})();

	function addEvents() {
		for (var i = 0; i < contactBtns.length; i++) {
			var currentBtn = contactBtns[i];
			currentBtn.addEventListener('click', function() {
				self.open();
			});
		}

		// Close contact form when select x
		closeContactForm.addEventListener('click', function() {
			self.close();
		});
	}

	function clearContactInputs() {
		for (var i = 0; i < contactFormInputs.length; i++) {
			var currentInput = contactFormInputs[i];
			currentInput.value = '';
			currentInput.classList.remove('contact-form-has-text');
		}
	}

	this.open = function() {
		topSection.scrollIntoView({
			block: 'start',
			behavior: 'instant'
		});

		clearContactInputs();

		onOpenCallback();

		greyBGHandler.open();
		contactFormWrapper.classList.remove('hide');
		submittedWrapper.classList.remove('show');
		submittedWrapper.classList.remove('success');
		submittedWrapper.classList.remove('failed');
		submittedLoader.textContent = '';
		submittedMsg.textContent = 'Sending';
		contactForm.classList.add('show');
	};

	this.close = function() {
		contactForm.classList.remove('show');
		sideMenuHandler.close();
	};
}
