const coachesSlides = document.querySelectorAll('[data-coach]');
const breakpoint = window.matchMedia('(max-width:1199px)');
const coachesWrapper = document.querySelector('.coaches__wrapper[data-swiper]');

const toggleClassOnSlide = (targetSlide) => {
  if (!targetSlide.classList.contains('is-open')) {
    coachesSlides.forEach((elem) => {
      elem.classList.remove('is-open');
    });
  }
  targetSlide.classList.toggle('is-open');
};

const addClickOnSlide = (evt) => {
  const targetSlide = evt.target.closest('[data-coach]');
  if (targetSlide) {
    toggleClassOnSlide(targetSlide);
  }
};

const clickOnCoachesSlides = () => {
  if (!coachesWrapper) {
    return;
  }

  coachesWrapper.addEventListener('click', addClickOnSlide);
};

const breakpointChecker = () => {
  if (!coachesWrapper) {
    return;
  }

  coachesWrapper.removeEventListener('click', addClickOnSlide);

  if (breakpoint.matches) {
    clickOnCoachesSlides();
  }
};

const addClickChangeBreakpoint = () => {
  breakpoint.addEventListener('change', breakpointChecker);
};

export {breakpointChecker, addClickChangeBreakpoint};
