$(function () {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        };
    });



    let navigation = $("header nav");
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navigation.find("a").on("click", function (e) {
        let trgtSelector = $(this).attr('href'),
            linkTrgt = $(trgtSelector);

        if (linkTrgt.length > 0) {
            e.preventDefault();
            let offset = linkTrgt.offset().top - 70;

            nav.removeClass("show");

            $('body, html').animate({
                scrollTop: offset
            }, 750);
        };
    });



    navToggle.on("click", function (e) {
        e.preventDefault();

        nav.toggleClass("show");
    });


    /*https://kenwheeler.github.io/slick/*/

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});
