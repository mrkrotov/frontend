export const slider = async () => {
    await import(/* webpackChunkName: "slick" */ 'slick-carousel/slick/slick.min.js');

    $('.js-slider').slick({
        infinite: true,
        swipeToSlide: true,
        dots: false,
        slidesToShow: 1,
        // responsive: [
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             dots: true,
        //             variableWidth: false,
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //         }
        //     }
        // ]
    });
};
