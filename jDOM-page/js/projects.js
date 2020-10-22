let menuBtn = document.querySelector('.burger-menu'),
    mobileMenu = document.querySelector('.mobile-nav'),
    bodyHidden = document.querySelector('body');

menuBtn.onclick = function () {
    menuBtn.classList.toggle('active-burger');
    mobileMenu.classList.toggle('hidden');
    bodyHidden.classList.toggle('o-h');
}

function selectTag(event) {
    let tag = event.target.getAttribute('data-tag');

    if (tag) {
        let tagItems = document.querySelectorAll('[data-tag-id="' + tag + '"]');
        
        if (tagItems) {
            tagItems.forEach(function(item) {
                item.classList.toggle('hidden');
            });
        }
        
        event.target.classList.toggle('inactive-item');
    }
}
