'use strict';

var totalPages = 4;
var navButton = document.getElementById('navButton');
var fakePage1 = document.getElementById('fakePage1');
var fakePage2 = document.getElementById('fakePage2');
var menu = document.getElementById('menu');

function activate(num) {
	var page = document.getElementById('page-'.concat(num));
}

function showMenu() {
	if (!navButton.classList.contains('open')) {
		navButton.classList.add('open');

		for (var i = 1; i <= totalPages; i++) {
			var page = document.getElementById('page-'.concat(i));

			if (page.classList.contains('active')) {
				page.classList.add('page--transform');
				page.classList.remove('active');
				page.classList.add('semi-active');
			} else {
				page.classList.add('page--standby');
			}
		}

		showFakePages();

		var _loop = function _loop(_i) {
			var menu = document.getElementById('menu__'.concat(_i));
			setTimeout(function () {
				menu.classList.add('fade-in');
			}, 200 * _i);
		};

		for (var _i = 1; _i <= totalPages; _i++) {
			_loop(_i);
		}
	} else {
		closeMenu();
	}
}

function showFakePages() {
	fakePage1.classList.add('fakePage--page1');
	fakePage2.classList.add('fakePage--page2');
}

function choosePage(num) {
	var page = document.getElementById('page-'.concat(num));
	page.classList.add('active');
	page.classList.add('page--appear');
	page.classList.remove('page--hidden');
	page.classList.remove('page--standby');
	setTimeout(function () {
		for (var i = 1; i <= totalPages; i++) {
			var _page = document.getElementById('page-'.concat(i));

			_page.classList.remove('semi-active');
		}

		closeMenu();
	}, 500);
}

function closeMenu() {
	navButton.classList.remove('open');

	for (var i = 1; i <= totalPages; i++) {
		var page = document.getElementById('page-'.concat(i));

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

	for (var _i2 = 1; _i2 <= totalPages; _i2++) {
		var _menu = document.getElementById('menu__'.concat(_i2));

		_menu.classList.remove('fade-in');
	}
}
