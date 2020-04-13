import 'select2/dist/js/select2.min'
import 'air-datepicker/dist/js/datepicker'
import 'air-datepicker/dist/js/i18n/datepicker.en'
import 'jquery-ui/ui/widgets/slider'

export default {
  init() {
    $('.datepicker-here').datepicker({
      language: 'en',
      autoClose: true,
    });
    //select2 filter
    $('.js-example-basic-filter').select2({
      placeholder: {
        id: '0',
        text: 'Select categories', //Should be text not placeholder
      },
    });
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
