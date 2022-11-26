import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {addIframe} from './modules/iframe';
import {clickOnSubNav} from './modules/subscription';
import {addCoachSwiper, addReviewsSwiper, removeSwiperClass} from './modules/add-swiper';
import {validateForm} from './modules/form-validation';
import {onLinkMove} from './modules/anchor';
import {breakpointChecker, addClickChangeBreakpoint} from './modules/coaches';


window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  breakpointChecker();
  addIframe();
  clickOnSubNav();
  validateForm();
  removeSwiperClass();
  addCoachSwiper();
  addReviewsSwiper();
  onLinkMove();
  addClickChangeBreakpoint();

  window.addEventListener('load', () => {
    initModals();
  });
});
