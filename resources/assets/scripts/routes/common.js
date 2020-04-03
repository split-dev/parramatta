import Headroom from 'headroom.js';

export default {
  init() {
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
    $('.shadow-bg').css('height', scrollHeight + 'px');
    },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
