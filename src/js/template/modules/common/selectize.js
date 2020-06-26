/**
 * Модуль "Selectize"
 */

export const selectize = async () => {
	await import(/* webpackChunkName: "selectize" */ 'selectize');

	$('.js-select').selectize();

	// блокируем поиск в селекте (при необходимости)
	// $('.selectize-input input').prop('readonly', true);
};
