var hambergerMenuElem = document.getElementById("hamberger-menu");
var contactBtns = document.querySelectorAll(".contact-btn");
var contactFormInput = document.querySelectorAll(".contact-form-text");
var contactSubmit = document.getElementById("contact-form-submit");
var contactForm = document.getElementById("contact-form");
var closeContactForm = document.getElementById("close-contact-form");
var greyOutPage = document.getElementById("grey-out-page");








init();





function init() {
	sideMenu();
	menusScrolling();
	popOutContact();
	greyOutPageHandler();
}





function sideMenu() {
	// Add an event for when the hamberger menu is clicked.
	// Toggle the class name of "is-open"
	// CSS will take case of the styling.

	hambergerMenuElem.addEventListener("click", function (e) {
		hambergerMenuElem.classList.toggle("is-open");
		hambergerMenuElem.classList.contains("is-open") ? showGreyBG() : hideGreyBG();
	});
}






function menusScrolling() {
	// Create variables for scrolling
	var homeBtnScroll = document.querySelectorAll(".home-btn-scroll");
	var aboutBtnScroll = document.querySelectorAll(".about-btn-scroll");
	var skillsBtnScroll = document.querySelectorAll(".skills-btn-scroll");
	var contactBtnScroll = document.querySelectorAll(".contact-btn-scroll");
	var sectionTop = document.getElementsByTagName("nav")[0];
	var sectionAbout = document.getElementById("section-about");
	var sectionSkills = document.getElementById("section-skills");
	var sectionContact = document.getElementById("section-contact");




	scrollOnCLick(homeBtnScroll, sectionTop);
	scrollOnCLick(aboutBtnScroll, sectionAbout);
	scrollOnCLick(skillsBtnScroll, sectionSkills);
	scrollOnCLick(contactBtnScroll, sectionContact);




	function scrollOnCLick(elem, targetScroll) {
		for (var i = 0; i < elem.length; i++) {
			var currentElem = elem[i];
			currentElem.addEventListener("click", function (e) {
				targetScroll.scrollIntoView({
					block: "start",
					behavior: 'smooth'
				});
			});
		}
	}
}




function popOutContact() {

	// Open/Close Contact Form
	closeContactForm.addEventListener("click", closePopOutContact);
	for (var i = 0; i < contactBtns.length; i++) {
		var currentContactBtn = contactBtns[i];
		currentContactBtn.addEventListener("click", openPopOutContact);
	}




	// Add event for when the user has a keyup event
	// If there's no text in the input, remove the
	// class name of "contact-form-has-text".
	// Else, add that class
	// That class is styled by the CSS positioning
	// the label for the input

	for (var i = 0; i < contactFormInput.length; i++) {
		var currentInput = contactFormInput[i];

		currentInput.addEventListener("keyup", function (e) {
			if (this.value.length > 0) this.classList.add("contact-form-has-text");
			else this.classList.remove("contact-form-has-text");
		});

		currentInput.addEventListener("focus", function (e) {
			this.parentElement.classList.remove("dis-error-msg", "dis-add-info-error-msg", "dis-invalid-email-msg");
		});
	}



	// Add event for when the contact form is submited
	// Check if any fields are empty and validate the
	// email.
	// Add class "contact-form-mandatory" to necesarry
	// textfields. Let css do the styling.

	contactSubmit.addEventListener("click", function (e) {
		// Prevent the page from refreshing
		e.preventDefault();

		// Loop though all textfields to validate
		for (var i = 0; i < contactFormInput.length; i++) {
			var currentInput = contactFormInput[i];

			if (!currentInput.value.length) {
				currentInput.parentElement.classList.add("dis-error-msg", "dis-add-info-error-msg");
			} else if (currentInput.name === "email" && !validateEmail(currentInput.value)) {
				// Validate email
				currentInput.parentElement.classList.add("dis-error-msg", "dis-invalid-email-msg");
			}
		}
	});
}




function greyOutPageHandler() {
	greyOutPage.addEventListener("click", function () {
		closePopOutContact();
		closeSideMenu();
	});
}








function openSideMenu() {
	hambergerMenuElem.classList.add("is-open");
	showGreyBG();
}
function closeSideMenu() {
	hambergerMenuElem.classList.remove("is-open");
	hideGreyBG();
}


function openPopOutContact() {
	contactForm.classList.add("show");
	showGreyBG();
}
function closePopOutContact() {
	contactForm.classList.remove("show");
	hideGreyBG();
}


function showGreyBG() {
	greyOutPage.classList.add("show");
}

function hideGreyBG() {
	greyOutPage.classList.remove("show");
}




function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}




/*
setTimeout(function () {
	console.log('timer');



	document.querySelector('#section-contact').scrollIntoView({
		behavior: 'smooth'
	});
}, 1000);
*/