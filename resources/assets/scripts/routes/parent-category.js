import StickySidebar from 'sticky-sidebar/dist/sticky-sidebar'
import Swiper from 'swiper/js/swiper.min';
import Headroom from 'headroom.js';

export default {
  init() {
    // eslint-disable-next-line no-unused-vars
    var sidebar = new StickySidebar('.sidebar', {
      topSpacing: 80,
      bottomSpacing: 20,
      containerSelector: '.main-content',
      innerWrapperSelector: '.sidebar__inner',
      observeParents: true,
    });
    //swiper
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      loop: true,
      spaceBetween: 5,
      slidesPerView: 5,
      observeParents: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 5,
        },
      },
    });
    // eslint-disable-next-line no-unused-vars
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs,
      },
    });
    //nav swiper
    var mySwiper = document.querySelector('.gallery-top').swiper;
    $('.button-next').click( function (e) {
      e.preventDefault();
      mySwiper.slideNext();
    });
    $('.button-prev').click( function (e) {
      e.preventDefault();
      mySwiper.slidePrev();
    });
    //scroll
    let elem = $('.anchor').offset().top;
    document.addEventListener('scroll', function() {
      if(pageYOffset > elem) {
        $('.anchor').addClass('fixed');
      } else {
        $('.anchor').removeClass('fixed');
      }
    });
    //headroom
    //mob-menu
    // eslint-disable-next-line no-redeclare
    var myElement = document.querySelector('.mob-menu');
    // eslint-disable-next-line no-redeclare
    var headroom  = new Headroom(myElement);
    headroom.init();
    //select2
    $('.js-example-basic-filter').select2({
      placeholder: {
        id: '0',
        text: 'Filter by…', //Should be text not placeholder
      },
    });
    $( 'ul.mega-menu__nav .dropdown-link' ).hover(
      function() {
        $( 'ul.mega-menu__nav >li' ).not(this).addClass('hover');
        if ($(this).hasClass('dropdown-link')) {
          $('.shadow-bg').addClass('show');
        }
      }, function() {
        $( 'ul.mega-menu__nav >li' ).removeClass( 'hover' );
        $('.shadow-bg').removeClass('show');
      }
    );
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
