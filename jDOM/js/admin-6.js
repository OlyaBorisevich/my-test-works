function switchOn(event) {
    let parent = event.target.closest('.main-form__item');

    if (! parent) {
        parent = event.target.closest('.subitem-element');
    }

    parent.querySelector('.switch-block span').classList.toggle('active');
    event.target.classList.toggle('switch-on');
}
