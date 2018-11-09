function portfoliosData() {
	/*

	Image MUST be 1400 x 900 pixels

*/

	var portfolios = [{
			title: 'phoneRX',
			link: 'http://www.phonerx.stevecahn.net/',
			imgSrc: 'https://i.postimg.cc/1zf5VmG1/phoneRX.gif',
			desc: "<p>This is an eCommerce mockup website I built which sells phones</p><p>It took me a bit longer than a month to create it. I wasn't working on it full time due to my other responsibilities (such as my temporary job).</p><p>I used HTML5, sass, and JavaScript in vscode to create this website.</p><p>I definitely did learn a lot from creating this website, and got a lot more comfortable coding. The two biggest challenges, were:</p><ul><li>Figuring out a way to filter the products.</li><li>•	I totally forgot that when copying JavaScript objects, they copy as shallow copies, and not deep copies. When I tried updating the cart, there was this weird bug which I couldn't seem to figure out, until I remembered I had to create a deep copy on the object.</li></ul><p>All in all, it was very fun and a bit challenging creating such a website.</p>"
		},
		{
			title: 'React.js Project',
			link: '',
			imgSrc: 'https://i.postimg.cc/mrbkTPyb/react-logo.png',
			desc: 'Coming Soon: Currently working on a react project now.'
		}
	];

	function getPortfolios() {
		return portfolios;
	}

	function getPortfolioByIndex(index) {
		return getPortfolios()[index];
	}

	return {
		getPortfolios: getPortfolios,
		getPortfolioByIndex: getPortfolioByIndex
	};
}