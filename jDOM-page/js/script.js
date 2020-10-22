$(document).ready(function () {
    $(".slider-block").owlCarousel({
        items: '2',
        dots: false,
        nav: true,
        responsiveClass: true,
        navText: [
          `<div class="block-prev">
                <svg class="prev" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
            <use xlink:href="#arrow"></use>
          </svg>
           </div>`,
          `<div class="block-next">
            <svg class="bg-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73px" height="70px">
                <path fill-rule="evenodd" fill="rgb(246, 203, 2)" d="M48.000,1.000 C65.046,-3.622 78.225,14.988 69.000,35.999 C61.784,52.434 42.367,69.034 22.000,63.999 C1.922,59.036 -3.760,36.965 4.697,21.133 C15.923,0.121 30.203,5.824 48.000,1.000 Z">
            </path>
            </svg>
            <svg class="next" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                <use xlink:href="#arrow"></use>
            </svg>
           </div>`
      ]
    });
});

let menuBtn = document.querySelector('.burger-menu'),
    mobileMenu = document.querySelector('.mobile-nav'),
    bodyHidden = document.querySelector('body'),
    btnActivePopup = document.querySelector('.article-btn'),
    popup = document.getElementById('popup');

menuBtn.onclick = function () {
    menuBtn.classList.toggle('active-burger');
    mobileMenu.classList.toggle('hidden');
    bodyHidden.classList.toggle('o-h');
}

if (btnActivePopup) {
    btnActivePopup.onclick = function(e) {
        e.preventDefault();
        popup.classList.remove('hidden');
        
        let coords = btnActivePopup.getBoundingClientRect();
        
        popup.style.top = coords.y + document.documentElement.scrollTop + 'px';
    }
    
    popup.querySelector('.close-btn').onclick = function(e) {
        e.preventDefault();
        
        popup.classList.add('hidden');
    }
}


