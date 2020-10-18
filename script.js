const totalPages = 4;
let navButton = document.getElementById(`navButton`);
let fakePage1 = document.getElementById('fakePage1');
let fakePage2 = document.getElementById('fakePage2');
let menu = document.getElementById('menu');

const activate = (num) => {
	let page = document.getElementById(`page-${num}`);
};

const showMenu = () => {
	if (!navButton.classList.contains('open')) {
		navButton.classList.add('open');
		for (let i = 1; i <= totalPages; i++) {
			let page = document.getElementById(`page-${i}`);
			if (page.classList.contains('active')) {
				page.classList.add('page--transform');
				page.classList.remove('active');
				page.classList.add('semi-active');
			} else {
				page.classList.add('page--standby');
			}
		}
		showFakePages();

		for (let i = 1; i <= totalPages; i++) {
			let menu = document.getElementById(`menu__${i}`);
			setTimeout(function () {
				menu.classList.add('fade-in');
			}, 200 * i);
		}
	} else {
		closeMenu();
	}
};

const showFakePages = () => {
	fakePage1.classList.add('fakePage--page1');
	fakePage2.classList.add('fakePage--page2');
};

const choosePage = (num) => {
	let page = document.getElementById(`page-${num}`);
	page.classList.add('active');
	page.classList.add('page--appear');
	page.classList.remove('page--hidden');
	page.classList.remove('page--standby');
	setTimeout(function () {
		for (let i = 1; i <= totalPages; i++) {
			let page = document.getElementById(`page-${i}`);
			page.classList.remove('semi-active');
		}
		closeMenu();
	}, 500);
};

const closeMenu = () => {
	navButton.classList.remove('open');
	for (let i = 1; i <= totalPages; i++) {
		let page = document.getElementById(`page-${i}`);
		if (page.classList.contains('semi-active')) {
			page.classList.remove('semi-active');
			page.classList.add('active');
		}
		page.classList.remove('page--transform');
		page.classList.remove('page--appear');
		if (!page.classList.contains('active')) {
			page.classList.add('page--hidden');
		}
	}
	fakePage1.classList.remove('fakePage--page1');
	fakePage2.classList.remove('fakePage--page2');

	for (let i = 1; i <= totalPages; i++) {
		let menu = document.getElementById(`menu__${i}`);
		menu.classList.remove('fade-in');
	}
};
