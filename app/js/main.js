$(function () {
    $('.top__slider').slick({
        dots: true,
        arrows: true,
        fade: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/top-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/top-slide-right.svg" alt="arrow right"></button>',
    });

    $('.selled__slider').slick({
        arrows: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="selled-left slick-prev"><img src="../images/top-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="selled-right slick-next"><img src="../images/top-slide-right.svg" alt="arrow right"></button>',
    });

    $('.header__service-img--cart').on('click', function () {
        $('.cart-rightside').removeClass('cart-rightside--close');
    });
    $('.cart-rightside__close').on('click', function () {
        $('.cart-rightside').addClass('cart-rightside--close');
    });

    $('.header__service-img--search').on('click', function () {
        $('.search').toggleClass('search--active');
    });
});