(function initPortfolioItems() {
	var portfoliosContainer = document.getElementById('portfolio-items');
	var portfolios = portfoliosData().getPortfolios();

	(function init() {
		// Reverse portfolio items, this way it gets
		// added to the dom in order of array initalization
		portfolios.reverse().forEach(function(portfolio, index) {
			index = portfolios.length - 1 - index;

			populateHTML(
				portfolio.title,
				portfolio.link,
				portfolio.imgSrc,
				portfolio.desc,
				index
			);
		});

		touchHanlder();
	})();

	function touchHanlder() {
		var isTouch = 'ontouchstart' in window || !!navigator.msMaxTouchPoints;
		var className = isTouch ? 'touch' : 'mouse';

		portfoliosContainer.classList.add(className);
	}

	function populateHTML(title, link, imgSrc, desc, index) {
		var html = '';
		html += '<div class="portfolio-item">';
		html += '<h3 class="portfolio-title">' + title + '</h3>';
		html +=
			'<img class="portfolio-img" src="' + imgSrc + '" alt="phoneRX">';
		html += '<div class="portfolio-about-container">';
		html += '<div class="portfolio-about">' + desc + '</div>';
		html += '<div class="hide-text"></div>';
		html += '</div>';
		html += '<div class="portfolio-btn-container">';
		html +=
			'<button class="portfolio-expand" onClick="popOutHandler().open(' +
			index +
			')">Read More</button>';
		html += '<a href="' + link + '">Visit</a>';
		html += '</div>';
		html += '</div>';

		portfoliosContainer.insertAdjacentHTML('afterbegin', html);
	}
})();
