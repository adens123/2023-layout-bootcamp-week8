import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';

console.log('Hello world!');

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  spaceBetween: 24,
  slidesPerView: 4,
  height: 1476,

  breakpoints: {
    992: {
      direction: 'horizontal',
      slidesPerView: 3,
      height: null,
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  mousewheel: true,
});
