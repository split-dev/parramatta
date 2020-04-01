export default {
  init() {
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
    },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
