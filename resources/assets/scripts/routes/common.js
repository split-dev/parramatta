import Headroom from 'headroom.js';

export default {
  init() {
    var myElement = document.querySelector('.mega-menu');
    var headroom  = new Headroom(myElement);
    headroom.init();

    $( 'ul.mega-menu__nav >li  >a' ).hover(
      function() {
        $( 'ul.mega-menu__nav >li  >a' ).not(this).addClass('hover');
      }, function() {
        $( 'ul.mega-menu__nav >li  >a' ).removeClass( 'hover' );
      }
    );
    },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
