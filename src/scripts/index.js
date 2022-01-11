import 'animate.css';
import '../styles/styles.css'
import './accordion.js'
import './scroll.js'
import WOW from 'wowjs';


new WOW.WOW().init();

$(document).ready(function() {
    $('.accordion__item-title').click(function(event) {
        $('.accordion__item').toggleClass('accordion__item--active');
        $('.accordion__item-content').toggleClass('accordion__item-content--show');
    });
});