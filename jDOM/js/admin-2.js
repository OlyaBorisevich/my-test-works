function checkPanel(event) {
    event.target.parentElement.querySelector('span').classList.toggle('checked');
    document.querySelector('.add-file-block').classList.toggle('active-block');
    document.querySelector('.main-form__content').classList.toggle('hidden-block');
}

function checkItem(event) {
    let isMain = true;
        parent = event.target.closest('.main-form__item');
    
    if (! parent) {
        isMain = false;

        parent = event.target.closest('.subitem-element');
    }
    
    parent.querySelector('.name-work').classList.toggle('active-name');
    parent.querySelector('.custom-checkbox span').classList.toggle('checked');
    
    if (isMain) {
        parent.classList.toggle('active-item');
    }
}

function loadFiles(event) {
    let parent = event.target.closest('.add-file');
    parent.querySelector('span').classList.add('active');
    parent.querySelector('.counter').innerHTML = event.target.files.length;
}



function switchOn(event) {
    let parent = event.target.closest('.main-form__item');
    
    if (! parent) {
        parent = event.target.closest('.subitem-element');
    }
    
    parent.querySelector('.price').classList.toggle('active-price');
    parent.querySelector('.switch-block span').classList.toggle('active');

    event.target.classList.toggle('switch-on');
}