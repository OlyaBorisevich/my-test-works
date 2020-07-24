$(function () {

    let btn = $(".btn");
    let btnWorks = $(".btn-works > button");

    btn.on("click", function (e) {
        e.preventDefault();

        btn.removeClass("active-btn");

        $(this).toggleClass("active-btn");
    });

    btnWorks.on("click", function (e) {
        e.preventDefault();

        btnWorks.removeClass("active-btn");

        $(this).toggleClass("active-btn");
    });

    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: true
    });
    
    $('.btn-works button').click(function () {
        let get_id = this.id;
        let get_current = $('.works-photo .' + get_id);

        $('.work-photo').not(get_current).hide(250);
        get_current.show(250);
    });

    $('#all').click(function () {
        $('.work-photo').show(250);
    });


});
