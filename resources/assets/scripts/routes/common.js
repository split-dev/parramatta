import Headroom from 'headroom.js';
import 'foundation-sites/dist/js/plugins/foundation.accordionMenu'
import 'foundation-sites/dist/js/plugins/foundation.core'
import 'foundation-sites/dist/js/plugins/foundation.util.keyboard'
import 'foundation-sites/dist/js/plugins/foundation.util.nest'

export default {
  init() {
    //menu
    $('.mob-menu__burger').click( function () {
      $('body').addClass('blocked');
      $('.shadow-bg').addClass('show');
      $('.mob-menu__close').addClass('active');
      $('.mob-menu__nav').addClass('show');
    });
    $('.mob-menu__close').click( function () {
      $('body').removeClass('blocked');
      $('.shadow-bg').removeClass('show');
      $('.mob-menu__close').removeClass('active');
      $('.mob-menu__nav').removeClass('show');
    });
    // eslint-disable-next-line no-unused-vars,no-undef
    var elem = new Foundation.AccordionMenu($('.accordion-menu'));
    //hover button
    $( '.btn-blue--animate').hover(
      function() {
        $( this ).attr('data-state','hover');
      }, function() {
        $( this ).attr('data-state','leave');
        $(this).css('pointer-events', 'none');
        setTimeout(function(){
          $('.btn-blue--animate').attr('data-state','none')
            .css('pointer-events', 'auto');
        }, 500);
      }
    );

    //mega-menu
    var myElement = document.querySelector('.mega-menu');
    var headroom  = new Headroom(myElement);
    headroom.init();

    $( 'ul.mega-menu__nav .dropdown-link' ).hover(
      function() {
        $( 'ul.mega-menu__nav >li' ).not(this).addClass('hover');
        console.log(this)
        if ($(this).hasClass('dropdown-link')) {
          $('.shadow-bg').addClass('show');
        }
      }, function() {
        $( 'ul.mega-menu__nav >li' ).removeClass( 'hover' );
        $('.shadow-bg').removeClass('show');
      }
    );
    //shadow height
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    $('.shadow-bg').css('height', (scrollHeight - 120) + 'px');
    },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
