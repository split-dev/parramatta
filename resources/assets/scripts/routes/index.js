import {WOW} from 'wowjs';

// eslint-disable-next-line no-unused-vars
const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 200,
  live: true,
});

export default {
  init() {
    //wow
    wow.init();
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
