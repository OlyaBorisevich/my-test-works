$(document).ready(function () {
    function Header() {
        let header = $('.header__block');

        if ($(window).scrollTop() !== 0) {
            header.addClass('down');
        } else {
            $('div.down').removeClass('down'); // Удаляет его
        }
    }

    Header();
    $(window).on('load scroll', Header);

    // Описываем функцию, которая вычисляет активный экран
    function navActive() {
        let curItem = '';
        $('section').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 200) {
                curItem = $(this).attr('id');
            }
        });
        let noActiveItem = $('.nav .header-list__item').find('a.active').length == 0,
            newActiveRequired = $('.nav .header-list__item').find('a.active').attr('href') != '#' + curItem;
        if (noActiveItem || newActiveRequired) {
            $('.nav .header-list__item').find('a.active').removeClass('active');
            $('.nav .header-list__item').find('a[href="#' + curItem + '"]').addClass('active');
        }
    }
    navActive();
    $(window).on('load scroll', navActive);

    $(".slider").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        smartSpeed: 450,
        dots: true,
        autoplay: true
    });

    $('[data-fancybox]').fancybox({
        thumbs: {
            autoStart: true
        }
    });

    let navigation = $("header .nav li");
    let nav = $("#list");
    let navToggle = $("#navToggle");

    navigation.find("a").on("click", function (e) {
        let trgtSelector = $(this).attr('href'),
            linkTrgt = $(trgtSelector);

        if (linkTrgt.length > 0) {
            e.preventDefault();
            let offset = linkTrgt.offset().top - 53;

            nav.removeClass("show");

            $('body, html').animate({
                scrollTop: offset
            }, 750);
        };
    });



    navToggle.on("click", function (e) {
        e.preventDefault();

        nav.toggleClass("show");

        navToggle.toggleClass("show-menu");
    });

    let desBtn = $(".description__title");

    desBtn.on("click", function () {
        let isActive = $(this).hasClass('active');

        desBtn.removeClass('active');
        $('.description__text').removeClass('active').slideUp();


        if (!isActive) {
            $(this).addClass('active').next().slideDown();
        }
    });

    $('[data-text]').on("click", function () {
        let secondText = $(this).attr('data-text'),
            firstText = $(this).text(),
            id = $(this).attr('id');

        $(this).attr('data-text', firstText);
        $(this).text(secondText);
        $(this).toggleClass('deactive');

        $.each($('.img'), function () {
            if ($(this).hasClass(id)) {
                $(this).slideToggle();
            }
        });
    });

    if ($('#map').length && $('#map').is(':empty')) {
        ymaps.ready(initContactsMap);
    }

    function initContactsMap() {
        let myMap = new ymaps.Map('map', {
            center: [53.900204, 30.333637],
            zoom: 17
        });

        ymaps.geocode('Беларусь, Могилев, Первомайская 14', {
            results: 1
        }).then(function (res) {
            // Выбираем первый результат геокодирования.
            let firstGeoObject = res.geoObjects.get(0),
                // Координаты геообъекта.
                coords = firstGeoObject.geometry.getCoordinates();

            let myPlacemark = new ymaps.Placemark(coords);

            myMap.geoObjects.add(myPlacemark);
            myMap.setCenter(coords)
        });
    };
});
