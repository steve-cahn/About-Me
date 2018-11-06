var greyBGHandler = new GreyBGHandler(closeAll);

function closeAll() {
	sideMenuHandler.close();
	greyBGHandler.close();
	popOutHandler().close();
}

// Document Loaded
document.querySelector('body').classList.remove('no-transition');
