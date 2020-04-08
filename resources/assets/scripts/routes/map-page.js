
export default {
  init() {
    $('.map__button').click( function (e) {
      e.preventDefault();
      $('.map__toggle').slideToggle();
      if ($(this).attr('data-target') === 'false') {
        $($('.map__button img')).attr('src','images/icons/close-filter.svg');
        $(this).attr('data-target', 'true');
      } else  {

        $(this).attr('data-target', 'false');
        $($('.map__button img')).attr('src','images/icons/setup-passive.svg');
      }
    });
    //reset
    $('.map__reset').click( function (e) {
      e.preventDefault();
      $('.map__list input').prop('checked', false);
      check();
    });
    //check
    $('.map__list input').change( function () {
      check();
    });
    function check() {
      let inp = $('.map__list input:checked').length;
      if (inp > 0) {
        $('.map__reset').addClass('select');
        $('.map__reset img:first-of-type').attr('src','images/icons/reset.svg')
      } else {
        $('.map__reset').removeClass('select');
        $('.map__reset img:first-of-type').attr('src','images/icons/refresh-passive.svg')
      }
    }
    //cut string
    function lookAllElements(element, nCharacters) {
      for (var i=0; i<element.length; i++) {
        if (element[i].textContent.length >= 12) {
          cutString(element[i], nCharacters);
        }
      }
    }

    function cutString(element, nCharacters) {
      var elementText = element.textContent;
      if (elementText.length >= nCharacters) {
        elementText = elementText.substr(0, nCharacters);
        let newText = elementText + '...';
        $(element).text(newText);
      }
    }
    //resize
    if ($(window).width() <= '525'){
      var string = document.querySelectorAll('.map__list label');
      lookAllElements(string, 11);
    } else {
      return;
    }
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
