var $ = require('jquery');


//accordion
$(document).ready(function () {
    $('.accordion__item-title').click(function (event) {
        const parent = $(this).parent();
        const sib = $(this).siblings();
        const plus = $(this).children('.accordion__item-title--plus');
        const minus = $(this).children('.accordion__item-title--minus');


        if (parent.hasClass('accordion__item--active')) {

            parent.removeClass('accordion__item--active');
            sib.removeClass('accordion__item-content--show');
            plus.removeClass('collapse');
            minus.removeClass('show');

        } else {

            $('.accordion__item').removeClass('accordion__item--active');
            parent.addClass('accordion__item--active');
            $('.accordion__item-content').removeClass('accordion__item-content--show');
            sib.addClass('accordion__item-content--show');
            $('.accordion__item-title--plus').removeClass('collapse');
            plus.addClass('collapse');
            $('.accordion__item-title--minus').removeClass('show');
            minus.addClass('show');
        }
    });

//slider

    let position = 0;
    let slidesToShow = 1;
    let slidesToScroll = 1;
    const container = $('.slider');
    const track = $('.slider__line');
    const item = $('.slider__line-item');
    const btnPrev = $('.feedback__arrow-left');
    const btnNext = $('.feedback__arrow-right');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });


    btnNext.click(function(){
        position -= movePosition;
        setPosition();
        checkButtons();
    });

    btnPrev.click(function(){
        position += movePosition;
        setPosition();
        checkButtons();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };


    const checkButtons = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
    };

    checkButtons();
});


