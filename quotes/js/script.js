$(document).ready(function () {
    let burger = $('.header-navigation__burger'),
        menu = $('.header-navigation__menu');
    
    burger.on("click", function(e) {
        e.preventDefault();
        burger.toggleClass(" active__burger");
        menu.toggleClass(" active");
    });
    
    $('.owl-carousel').owlCarousel({
        items: 1,
        dots: true
    });

});