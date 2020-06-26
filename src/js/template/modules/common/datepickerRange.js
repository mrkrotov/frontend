/**
 * Модуль "Bootstrap Datepicker"
 */

export const datepickerRange = async () => {
  await import(
    /* webpackChunkName: "bootstrap-datepicker" */ "bootstrap-datepicker"
  );
  await import(
    /* webpackChunkName: "bootstrap-datepicker.ru" */ "bootstrap-datepicker/js/locales/bootstrap-datepicker.ru"
  );
  await import(
    /* webpackChunkName: "jquery.inputmask" */ "inputmask/dist/jquery.inputmask.js"
  );

  function updateDates(input) {
    var date = input.datepicker("getDate");
    if (input.data("range") === "start") {
      input
        .closest(".js-datepicker-group")
        .find('.js-datepicker[data-range="end"]')
        .datepicker("setStartDate", date);
    } else if (input.data("range") === "end") {
      input
        .closest(".js-datepicker-group")
        .find('.js-datepicker[data-range="start"]')
        .datepicker("setEndDate", date);
    }
  }

  const mainBlock = $(".js-datepicker-group");

  var inputs = mainBlock.find(".js-datepicker");

  mainBlock.datepicker({
    inputs: inputs,
    autoclose: true,
    language: "ru",
    // todayHighlight: true,
    toggleActive: true,
    clearBtn: false,
    orientation: "bottom",
    format: "dd.mm.yyyy",
    keepEmptyValues: true
  });

  inputs.each(function() {
    updateDates($(this));
  });

  inputs.on("change", function() {
    updateDates($(this));
  });

  // mainBlock.on('click', '.js-datepicker-icon', function () {
  // 	if (!window.support_touch) {
  // 		$(this).siblings('.js-datepicker').trigger('focus');
  // 	} else {
  // 		$(this).siblings('.js-datepicker').datepicker('show');
  // 	}
  // });
};
