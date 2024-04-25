import AOS from 'aos';
import fullpage from 'fullpage.js';
import 'aos/dist/aos.css';
import 'fullpage.js/dist/fullpage.css';
import $ from 'jquery';

AOS.init();

var elements = document.querySelectorAll('[data-aos]');
elements.forEach(function(element) {
  element.classList.add("aos-init");
});

var fullPageInstance = new fullpage('#fullpage', {
    navigation: true,
    verticalCentered: false,
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

