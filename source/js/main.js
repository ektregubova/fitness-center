import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {addIframe} from './modules/iframe';
import {addClickOnButtonSubscr} from './modules/subscription';
import {addCoachSwiper, addReviewsSwiper} from './modules/add-swiper';
import {validateForm} from './modules/form-validation';
import {onLinkMove} from './modules/anchor';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  addIframe();
  addClickOnButtonSubscr();
  validateForm();
  addCoachSwiper();
  addReviewsSwiper();
  onLinkMove();

  window.addEventListener('load', () => {
    initModals();
  });
});
