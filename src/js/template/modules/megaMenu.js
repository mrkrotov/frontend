/**
 * Модуль "Мега-меню"
 */

export const megaMenu = () => {
	const dropdown = $('.bg-dropdown');
	$('.js-mega-menu').hover(
		function () {
			dropdown.addClass('active');
			$('#' + $(this).data('mega-menu-id')).addClass('active');
		},
		function () {
			dropdown.removeClass('active');
			$('#' + $(this).data('mega-menu-id')).removeClass('active');
		}
	);

	$('.mega-menu').hover(
		function () {
			dropdown.addClass('active');
			$(this).addClass('active');
		},
		function () {
			dropdown.removeClass('active');
			$(this).removeClass('active');
		}
	);
};
