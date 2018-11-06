(function ScrollIntoViewHandler() {
	// Variables for Scrolling
	var homeBtnScroll = document.querySelectorAll('.home-btn');
	var aboutBtnScroll = document.querySelectorAll('.about-btn');
	var skillsBtnScroll = document.querySelectorAll('.skills-btn');
	var portfolioBtnScroll = document.querySelectorAll('.portfolio-btn');
	var topSection = document.getElementsByTagName('header')[0];
	var sectionAbout = document.getElementById('about');
	var sectionSkills = document.getElementById('skills');
	var portfolioView = document.getElementById('portfolio');

	(function init() {
		// Add scrolling event for menu items
		scrollOnCLickHandler(homeBtnScroll, topSection);
		scrollOnCLickHandler(skillsBtnScroll, sectionSkills);
		scrollOnCLickHandler(aboutBtnScroll, sectionAbout);
		scrollOnCLickHandler(portfolioBtnScroll, portfolioView);
	})();

	function scrollOnCLickHandler(elem, targetScroll) {
		for (var i = 0; i < elem.length; i++) {
			var currentElem = elem[i];

			currentElem.addEventListener('click', function(e) {
				sideMenuHandler.close();

				targetScroll.scrollIntoView({
					block: 'start',
					behavior: 'smooth'
				});
			});
		}
	}
})();
