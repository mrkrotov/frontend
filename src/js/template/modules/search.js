export const search = async () => {
    const $searchBar = $('.js-search-bar');
    const $searchBarIcon = $searchBar.find('.icon-Union');
    const $mobileSearchInput = $('.js-mobile-search').find('.mobile-search__input');
    const togglingClass = 'mobile-search_active';
    const activeClass = 'active';
    const $body = $('body');

    $(document).on('click', '.js-search-bar, .mobile-search__backdrop', function () {
        $body.toggleClass(togglingClass);
        $searchBarIcon.toggleClass(activeClass);
    });

    $('body').on('click', '.js-search-bar', function () {
        $mobileSearchInput.focus();
    });

    $('body').on('click', '.mobile-search__backdrop', function () {
        $mobileSearchInput.blur();
    });

    $(window).on('resize', function () {
        if ($body.hasClass(togglingClass)) {
            if ($(this).width() >= 1200) {
                $body.removeClass(togglingClass);
                $searchBarIcon.removeClass(activeClass);
            }
        }
    });

    $('body').on('click', '.js-remove-value', function (e) {
        $(this).siblings('input').val('').focus();
    })
};