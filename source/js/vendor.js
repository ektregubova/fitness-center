// Swiper 7.4.1
// import './vendor/swiper.js';

import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper-bundle.min';

const coachSwiper = document.querySelector('.swiper');

function addCoachSwiper() {
  if (!coachSwiper) {
    return;
  }

  const swiper = new Swiper(coachSwiper, {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
  });
  swiper.enable();
}

export {addCoachSwiper};
