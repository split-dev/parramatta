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
      $(this).addClass('active');
    })
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
