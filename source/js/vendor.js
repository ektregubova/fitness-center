// Swiper 7.4.1
// import './vendor/swiper.js';

import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper-bundle.min';

const coachSwiper = document.querySelector('.coaches__swiper');
const reviewsSwiper = document.querySelector('.reviews__swiper');

function addReviewsSwiper() {
  if (!reviewsSwiper) {
    return;
  }
  const swiper = new Swiper(reviewsSwiper, {

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    slidesPerView: 1,
    watchOverflow: true,
    loop: false,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  swiper.enable();
}

function addCoachSwiper() {
  if (!coachSwiper) {
    return;
  }

  const swiper = new Swiper(coachSwiper, {

    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    watchOverflow: true,
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  swiper.enable();
}

export {addCoachSwiper, addReviewsSwiper};
