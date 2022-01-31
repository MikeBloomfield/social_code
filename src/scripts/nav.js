(function () {
    const burgerItem = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.nav__close');
    
    burgerItem.addEventListener('click',() => {
        menu.classList.add('nav--active');
    });
    menuCloseItem.addEventListener('click',() => {
        menu.classList.remove('nav--active');
    });
    
}());
    