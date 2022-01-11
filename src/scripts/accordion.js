var $ = require('jQuery');

$(document).ready(function() {
    $('.accordion__item-title').click(function(event) {
        const parent = $(this).parent();
        const sib = $(this).siblings();
        if (parent.hasClass('accordion__item--active') ||
        sib.hasClass('accordion__item--active') ) {
            parent.removeClass('accordion__item--active')
            sib.removeClass('accordion__item-content--show')
        } else {
            $('.accordion__item').removeClass('accordion__item--active');
            parent.addClass('accordion__item--active');
            $('.accordion__item-content').removeClass('accordion__item-content--show');
            sib.addClass('accordion__item-content--show');
        }
    });
});