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
      $('.mob-menu__error').css('display', 'none')
    });
    $('.mob-menu__close').click( function () {
      $('body').removeClass('blocked');
      $('.shadow-bg').removeClass('show');
      $('.mob-menu__close').removeClass('active');
      $('.mob-menu__nav').removeClass('show');
      $('.mob-menu__error').css('display', 'block')
    });
    // eslint-disable-next-line no-unused-vars,no-undef
    var elem = new Foundation.AccordionMenu($('.accordion-menu'));
    // eslint-disable-next-line no-unused-vars,no-undef
    var elem2 = new Foundation.AccordionMenu($('.accordion-menu-lang'));
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

    //mob-menu
    // eslint-disable-next-line no-redeclare
    var myElement = document.querySelector('.mob-menu');
    // eslint-disable-next-line no-redeclare
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

    //loading anim
    $('.loading-btn').click( function (e) {
      e.preventDefault();
      $(this).addClass('anim');
    });
    //filter news page
    $('.loading-btn').click( function (e) {
      e.preventDefault();
      $(this).addClass('anim');
    });

    //error close
    $('.mega-menu__error .close').click ( function () {
      $('.mega-menu__error').addClass('hidden');
    });
    //mob error close
    $('.mob-menu__error .close').click ( function () {
      $('.mob-menu__error').addClass('hidden');
    });
    //cookie
    $('.close__cookie').click ( function () {
      $('.alert__cookie').addClass('hidden');
    });
    //help box
    $('.help-box .no').click( function (e) {
      e.preventDefault();
      $('.help-box').addClass('hide');
    });
    //text area
    $('.textarea textarea').on('input',function(){
      let count = $('.textarea textarea').val().length;
      $('.textarea .current').text(count);
    });
    //max
    (function($) {
      $.fn.extend( {
        limiter: function(limit, elem) {
          $(this).on('keyup focus', function() {
            setCount(this, elem);
          });
          // eslint-disable-next-line no-unused-vars
          function setCount(src, elem) {
            var chars = src.value.length;
            if (chars > limit) {
              src.value = src.value.substr(0, limit);
              chars = limit;
            }
          }
          setCount($(this)[0], elem);
        },
      });
    })(jQuery);
    $('.textarea textarea').limiter(500);
    //size load
    document.getElementById('customFile').addEventListener('change', updateSize);
    function updateSize() {
      var file = document.getElementById('customFile').files[0],
        // eslint-disable-next-line no-unused-vars
        parts = file.name.split('.');
      let size = ((file.size /1024) / 1024);
      size.toFixed(2);
      let fileName = $('.custom-file-input').val().split('\\').pop();
      if (size < 5) {
        $('.file-name').text(fileName);
        $('.file-load').fadeIn();
      }
    }
    //remove
    $('.file-load .remove').click( function (e) {
      e.preventDefault();
      $('.file-load').fadeOut();
      $('#customFile').val('');
    })
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
