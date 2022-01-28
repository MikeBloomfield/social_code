(function () {
    const burgerItem = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.nav__close');
    const link = document.querySelectorAll('.nav__list-item');
    
    burgerItem.addEventListener('click',() => {
        menu.classList.add('nav--active');
    });
    menuCloseItem.addEventListener('click',() => {
        menu.classList.remove('nav--active');
    });
    link.addEventListener('click',() => {
        menu.classList.toggle('nav--active');
    });
    
}());
    