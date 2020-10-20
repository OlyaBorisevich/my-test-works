$(document).ready(function () {
    $(".slider-block").owlCarousel({
        items: '2',
        dots: false,
        nav: true,
        navText: [
          `<svg class="prev" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
            <use xlink:href="#arrow"></use>
          </svg>`,
          `<svg class="next" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
            <use xlink:href="#arrow"></use>
          </svg>`
      ]
    });
});