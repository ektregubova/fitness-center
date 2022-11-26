import Swiper from '../vendor/swiper-bundle.min';

const coachSwiper = document.querySelector('.coaches__swiper');
const reviewsSwiper = document.querySelector('.reviews__swiper');
const swiperButtons = document.querySelectorAll('[data-swiper-button]');
const swiperWrappers = document.querySelectorAll('[data-swiper]');

const removeSwiperClass = () => {
  if (!swiperButtons || !swiperWrappers) {
    return;
  }

  swiperButtons.forEach((button) => {
    button.classList.remove('is-nojs');
  });

  swiperWrappers.forEach((elem) => {
    elem.classList.remove('is-nojs');
  });
};

const addReviewsSwiper = () => {
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
};

const addCoachSwiper = () => {
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
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },

    watchOverflow: true,
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    watchSlidesProgress: true,
  });
  swiper.enable();
};

export {addCoachSwiper, addReviewsSwiper, removeSwiperClass};
