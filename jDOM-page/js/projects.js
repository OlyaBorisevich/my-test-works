let menuBtn = document.querySelector('.burger-menu'),
    mobileMenu = document.querySelector('.mobile-nav'),
    bodyHidden = document.querySelector('body');

menuBtn.onclick = function () {
    menuBtn.classList.toggle('active-burger');
    mobileMenu.classList.toggle('hidden');
    bodyHidden.classList.toggle('o-h');
}

