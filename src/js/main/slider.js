$(document).ready(function () {
    $('.pricingCarousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1
            },
            700: {
                nav: false,
                dots: true,
                items: 2
            },
            1000: {
                nav: false,
                dots: true,
                items: 3
            }
        }
    });

    $('.headerCarousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true

    });
});
