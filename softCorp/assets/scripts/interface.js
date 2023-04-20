const BODY = document.querySelector('body');
const HTMLELEMENT = document.querySelector('html');

function showValueRange() {
    let ranges = document.querySelectorAll('.js_range');

    if (!ranges) return;

    ranges.forEach(function(range) {
        let value = range.value,
            dataValue = range.setAttribute('data-value', value + '%');
    });
}

function selectDefault() {
    //https://github.com/selectize/selectize.js

    let selects = $('.js_select-default');

    if (selects.length) {
        $.each(selects, function() {
            $(this).selectize({
                create: false,
                sortField: "text",
                allowEmptyOption: false,
                placeholder: 'Выберите тип системы',
                persist: false
            });
        });
    }
}

function scrollHeader() {
    var header = $('.layout-header');

    if (header.length) {

        function detectScroll() {
            if ($(this).scrollTop() > 0) {
                header.addClass("layout-header__fixed");
            } else {
                header.removeClass("layout-header__fixed");
            }
        }

        detectScroll();

        $(window).scroll(function () {
            detectScroll();
        });
    }
}

function mobileMenu() {
    let buttonMobileBurger = document.querySelector('.js_burger');

    if(!buttonMobileBurger) return;

    buttonMobileBurger.onclick = function () {
        if (buttonMobileBurger.classList.contains('burger_active')) {
            buttonMobileBurger.classList.remove('burger_active');
            HTMLELEMENT.classList.remove('open-panel');
        } else {
            buttonMobileBurger.classList.add('burger_active');
            HTMLELEMENT.classList.add('open-panel');
        }
    }

    if (BODY.clientWidth >= 767) {
        buttonMobileBurger.classList.remove('burger_active');
        HTMLELEMENT.classList.remove('open-panel');
    }
}

window.onresize = function () {
    mobileMenu();
}

window.onchange = function() {
    showValueRange();
}

window.onload = function() {
    showValueRange();
    selectDefault();
    scrollHeader();
    mobileMenu();
}