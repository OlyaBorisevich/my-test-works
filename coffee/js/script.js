menu.onclick = function myFunction() {
    let x = document.getElementById('myTopnav');
    
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var App = angular.module('App', []);

App.controller('PriceCtrl', function ($scope, $http) {

    $scope.sortBy = 'name';
    $scope.sortRev = false;

    $http.get('price.json').then(function (res) {
        $scope.prices = res.data;
        $scope.calc();
    }).catch(function (err) {
        $scope.reqStatus = err.status;
        $scope.reqStatusText = err.statusText;
    });

    $scope.sortSet = function (propertyName) {
        if ($scope.sortBy == propertyName) {
            $scope.sortRev = !$scope.sortRev;
        }
        $scope.sortBy = propertyName;
    }

});



(function ($) {
    $(document).ready(function () {

        $(".slider1").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true
        });

        $(".slider2").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });

        $(".slider3").owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });

        $('#fb1').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: false,
            fbColor: 'blue'
        });

        if ($('#lp-map').length && $('#lp-map').is(':empty')) {
            ymaps.ready(initContactsMap);
        }

        function initContactsMap() {
            let myMap = new ymaps.Map('lp-map', {
                center: [53.924702, 27.511606],
                zoom: 17
            });

            ymaps.geocode('г. Минск', {
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
        }
/*Кнопка наверх*/
        $(window).scroll(function () {

            if ($(this).scrollTop() != 0) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });

        $('#toTop').click(function () {

            $('body,html').animate({
                scrollTop: 0
            }, 800);

        });

    });
})(jQuery);
