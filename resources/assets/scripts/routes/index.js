import {WOW} from 'wowjs';

// eslint-disable-next-line no-unused-vars
const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 200,
  mobile: false,
  live: true,
});

export default {
  init() {
    //wow
    if ($(window).width() > '640'){
      wow.init();
    } else {
      return
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
