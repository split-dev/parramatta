import 'select2/dist/js/select2.min'

export default {
  init() {

    //select2 filter
    $('.js-example-basic-filter').select2({
      placeholder: {
        id: '0',
        text: 'Filter by…', //Should be text not placeholder
      },
    });

    //filter news page
    $('.filter li').click( function (e) {
      e.preventDefault();
      $('.filter li').not(this).removeClass('active');
      $(this).toggleClass('active');
    });
    //fixed select
    let select = $('.js-example-basic-filter').offset().top;
    document.addEventListener('scroll', function() {
      if(pageYOffset > select) {
        $('.select2.select2-container').addClass('fixed');
      } else {
        $('.select2.select2-container').removeClass('fixed');
      }
    });
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
