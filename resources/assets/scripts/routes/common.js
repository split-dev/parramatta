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
    if (!$('body').hasClass('child')) {
      var myElement = document.querySelector('.mega-menu');
      var headroom  = new Headroom(myElement);
      headroom.init();
    } else  {
      return;
    }

    //mob-menu
    // eslint-disable-next-line no-redeclare
    var myElement = document.querySelector('.mob-menu');
    // eslint-disable-next-line no-redeclare
    var headroom  = new Headroom(myElement);
    headroom.init();

    $( 'ul.mega-menu__nav .dropdown-link' ).hover(
      function() {
        $( 'ul.mega-menu__nav >li' ).not(this).addClass('hover');
        if ($(this).hasClass('dropdown-link')) {
          $('.shadow-bg').addClass('show');
          $('.mega-menu__search').removeClass('active');
          $('.mega-menu__search input').val('');
          $('.mega-menu__result').css('display', 'none');
          $('.search').removeClass('line');
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
    if ($('.textarea')) {
      //text area
      $('.textarea textarea').on('input',function(){
        let count = $('.textarea textarea').val().length;
        $('.textarea .current').text(count);
        $('.textarea textarea').limiter(500);
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
    }
    $('.search').click( function (e) {
      e.preventDefault();
      $('.mega-menu__search').toggleClass('active');
      $(this).toggleClass('line');
      $('.shadow-bg').toggleClass('show');
      $('.mega-menu__search input').val('');
      $('.mega-menu__result').css('display', 'none');
    });
    //target
    $(document).mouseup(function (e){
      if(jQuery('.mega-menu__search').hasClass('active')) {
        var div = $('.mega-menu');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          $('.mega-menu__search').removeClass('active');
          $('.shadow-bg').removeClass('show');
          $('.mega-menu__search input').val('');
          $('.mega-menu__result').css('display', 'none');
        }
      }
    });
    //input live search
    $('.mega-menu__search input').on('input', function () {
      if ($(this).val().length > 0) {
        $('.mega-menu__result').css('display', 'block');
        setTimeout(function(){
          $('.loader').addClass('hidden');
        }, 3000);
      } else {
        $('.mega-menu__result').css('display', 'none');
      }
    });
    //hover search
    $( '.mega-menu__search').hover(
      function() {
      }, function() {
        $('.mega-menu__form input').val('');
        $('.mega-menu__result').css('display','none');
        $('.loader').removeClass('hidden').addClass('visible');
      }
    );
    $('.mob-menu__nav .accordion-menu>li').click( function (e) {
      e.preventDefault();
      $('.mob-menu__nav .accordion-menu>li').not(this).removeClass('select');
      $(this).toggleClass('select');
    })
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
