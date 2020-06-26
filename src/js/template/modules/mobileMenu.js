/**
 * Модуль "Мобильное меню"
 */

export const mobileMenu = () => {
	const $menuBar = $('.js-menu-bar');
	const togglingClass = 'mobile-menu_active';
	const activeClass = 'active';
	const $html = $('html');
	const $body = $('body');

	$(document).on('click', '.js-menu-bar', function () {
		console.log(1123);
		$html.toggleClass('menu-open');
		$body.toggleClass(togglingClass);
		$menuBar.toggleClass(activeClass);
	});

	$(window).on('resize', function () {
		if ($body.hasClass(togglingClass)) {
			if ($(this).width() >= 1199) {
				$html.removeClass('menu-open');
				$body.removeClass(togglingClass);
				$menuBar.removeClass(activeClass);
			}
		}
	});
};
