var $ = require('jQuery');

$(document).ready(function() {
    $('.accordion__item-title').click(function(event) {
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
});