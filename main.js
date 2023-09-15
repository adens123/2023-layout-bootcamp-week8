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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
