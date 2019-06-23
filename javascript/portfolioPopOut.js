function popOutHandler() {
	var popOutContainer = document.getElementById(
		'portfolio-pop-out-container'
	);

	function open(index) {
		if (typeof index !== 'number')
			throw 'Please provide a number for the paramater of index';

		var currentPortfolio = portfoliosData().getPortfolioByIndex(index);

		populateHTML(
			currentPortfolio.title,
			currentPortfolio.link,
			currentPortfolio.imgSrc,
			currentPortfolio.desc
		);

		greyBGHandler.open();

		setTimeout(function() {
			popOutContainer.classList.add('open');
		});
	}

	function close() {
		popOutContainer.classList.remove('open');
		popOutContainer.innerHTML = '';
	}

	function populateHTML(title, link, imgSrc, desc) {
		var html = '';

		html += '<img src="' + imgSrc + '" alt="' + title + '">';
		html += '<div id="p-pop-out-detail-container">';
		html += '<h3>' + title + '</h3>';
		html += '<div id="p-pop-out-desc">' + desc + '</div>';
		html +=
			'<a target="_blank" href="' +
			link +
			'" id="p-pop-out-visit">Visit</a>';
		html += '</div>';

		popOutContainer.insertAdjacentHTML('afterbegin', html);
	}

	return {
		open: open,
		close: close
	};
}
