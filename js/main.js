import AOS from 'aos';
import fullpage from 'fullpage.js';
import Swiper from 'swiper';

import 'aos/dist/aos.css';
import 'fullpage.js/dist/fullpage.css';
import '../node_modules/swiper/swiper.css';

import $ from 'jquery';

// 初始化aos
AOS.init();

// 创建fullpage实例
var elements = document.querySelectorAll('[data-aos]');
elements.forEach(function(element) {
  element.classList.add("aos-init");
});
var fullPageInstance = new fullpage('#fullpage', {
    navigation: true,
    verticalCentered: false,
    anchors:['page1', 'page2', 'page3', 'page4'],
    menu: "#myMenu",
    onLeave: function(){
        $('.section [data-aos]').each(function(){
            $(this).removeClass("aos-animate")
        });
    },
    onSlideLeave: function(){
        $('.slide [data-aos]').each(function(){
            $(this).removeClass("aos-animate")
        });
    },
    afterSlideLoad: function(){
        $('.slide.active [data-aos]').each(function(){
            $(this).addClass("aos-animate")
        });
    },
    afterLoad: function(){
        $('.section.active [data-aos]').each(function(){
            $(this).addClass("aos-animate")
        });
    }
});

// 创建swiper
const swiper = new Swiper('.swiper-container', {

});