function portfoliosData() {
	/*

	Image MUST be 1400 x 900 pixels

*/

	var portfolios = [
		{
			title: 'Dashboard',
			link: 'https://dashboard.stevecahn.net',
			imgSrc:
				'https://media.giphy.com/media/llUG4UoYKrwRUv3OMU/giphy.gif',
			desc: `I created a dark version of a dashboard for the fun of it. It's created using the technologies of react.js, react-router, node.js, express.js. and mysql.`
		},
		{
			title: 'Gaming Video Channel',
			link: '',
			imgSrc:
				'https://media.giphy.com/media/LnnsMFTeIsqPIC9HAT/giphy.gif',
			desc: `VERSION is not up and running yet since I'm still working on the final touches. I created it over a weekend using the technologies of react and react-redux. This was my first dark mode website I crated, and was definetly a fun side project.`
		},
		{
			title: 'To Do List',
			link: 'http://todo.stevecahn.net/',
			imgSrc: 'https://i.postimg.cc/bwRwn257/to-do-list.gif',
			desc: `This is a full stack website created using MongoDB, Express.js, React.js, Node.js. Or the MERN stack. It's a pretty complex to-do web app since it has a user accounts system so that users can register/log in to their accounts to view their specific to-do list. Had a lot of fun creating this!`
		},
		{
			title: 'Bait Nesicha',
			link: 'https://baitnesicha.stevecahn.net',
			imgSrc:
				'https://media.giphy.com/media/LOEPD7Ql7qyoKgbexh/giphy.gif',
			desc: `<p>Bait Nesicha is a drug rehab and I was asked to create their website. (Right now there's dummy text/images.) Due to the fact that I love react.js, I used react.js for this project, even though it's a really simple one.</p>`
		},
		{
			title: 'JavaScript Test',
			link: 'https://steve-cahn.github.io/Javascript-test/',
			imgSrc: 'https://i.postimg.cc/G2G7W6WG/JSTest.gif',
			desc: `<p>This is my first project created with React.js. It was a lot of fun creating it! Started with designing the website in Adobe XD. Then developed it using React.js and Sass.</p><p>I want this website to be the place everyone, from beginner to advanced developer, to test their JavaScript skills in a fun way.</p>`
		},
		{
			title: 'phoneRX',
			link: 'http://www.phonerx.stevecahn.net/',
			imgSrc: 'https://i.postimg.cc/1zf5VmG1/phoneRX.gif',
			desc:
				"<p>This is an eCommerce mockup website I built which sells phones</p><p>It took me a bit longer than a month to create it. I wasn't working on it full time due to my other responsibilities (such as my temporary job).</p><p>I used HTML5, sass, and JavaScript in vscode to create this website.</p><p>I definitely did learn a lot from creating this website, and got a lot more comfortable coding. The two biggest challenges, were:</p><ul><li>Figuring out a way to filter the products.</li><li>•	I totally forgot that when copying JavaScript objects, they copy as shallow copies, and not deep copies. When I tried updating the cart, there was this weird bug which I couldn't seem to figure out, until I remembered I had to create a deep copy on the object.</li></ul><p>All in all, it was very fun and a bit challenging creating such a website.</p>"
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
