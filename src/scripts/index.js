// import 'animate.css';
import '../styles/styles.css';
import './accordion.js';
import './scroll.js';
import './nav.js';
import { Fancybox } from "@fancyapps/ui";
import './mask.js';
import WOW from 'wowjs';


new WOW.WOW().init();

new Fancybox.init();
$('#hidden').fancybox({'showCloseButton':false});