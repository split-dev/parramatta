import 'select2/dist/js/select2.min'
import 'air-datepicker/dist/js/datepicker'
import 'air-datepicker/dist/js/i18n/datepicker.en'
import 'jquery-ui/ui/widgets/slider'

export default {
  init() {
    $('.datepicker-start').datepicker({
      language: 'en',
      autoClose: true,
    });
    //one time
    $('#slider-range-line-1').slider({
      range: false,
      min: 0,
      max: 1440,
      step: 15,
      values: [0],
      slide: function (e, ui) {
        var hours1 = Math.floor(ui.values[0] / 60);
        var minutes1 = ui.values[0] - (hours1 * 60);

        if (hours1.length == 1) hours1 = '0' + hours1;
        if (minutes1.length == 1) minutes1 = '0' + minutes1;
        if (minutes1 == 0) minutes1 = '00';
        if (hours1 < 10) {
          // eslint-disable-next-line no-self-assign
          hours1 = '0' + hours1;
          // eslint-disable-next-line no-self-assign
          minutes1 = minutes1;
        }
        if (hours1 >= 12) {
          if (hours1 == 12) {
            // eslint-disable-next-line no-self-assign
            hours1 = hours1;
            // eslint-disable-next-line no-self-assign
            minutes1 = minutes1;
          }
        } else {
          // eslint-disable-next-line no-self-assign
          hours1 = hours1;
          // eslint-disable-next-line no-self-assign
          minutes1 = minutes1;
        }
        if (hours1 == 0) {
          hours1 = '0' + 0;
          // eslint-disable-next-line no-self-assign
          minutes1 = minutes1;
        }
        $('#slider-range-line-1 span.ui-slider-handle span').fadeIn();
        $('#slider-range-line-1 span.ui-slider-handle span').html(hours1 + ':' + minutes1);
      },
    });
    $('#slider-range-line-1 span.ui-slider-handle').append('<span>00:00</span>');
    $('#slider-range-line-1 span.ui-slider-handle span').css('display','none');

    //select2 filter
    $('.js-example-basic-filter').select2({
      placeholder: {
        id: '0',
        text: 'Please select…', //Should be text not placeholder
      },
    });
    //open air date
    $('.date svg').click( function () {
      let element = $(this).prev();
      var myDatepicker = $(element).datepicker().data('datepicker');
      myDatepicker.show();
    });
    //add load button
    let number = 2;
    $('.add__button').click( function (e) {
      e.preventDefault();
      if (number <= 3) {
        $('.img-box').append('<div class="form__img">\n' +
          '            <input type="file" class="custom-file-input" onchange="element(this)" id="customFile' + number + '">\n' +
          '            <label for="customFile' + number + '"> <img src="images/icons/download.svg"> <img src="images/icons/white-download.svg"> Choose a file…</label>\n' +
          '            <div class="file-load">\n' +
          '              <span class="file-name"></span>\n' +
          '              <span data-file="customFile' + number + '" onclick="remove(this)" class="remove">Remove file</span>\n' +
          '            </div>\n' +
          '          </div>');
        number = number + 1;
      }
    });
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
