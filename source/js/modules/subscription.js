const subscrButtons = document.querySelectorAll('[data-sub-button]');
const subContents = document.querySelectorAll('[data-sub-tab]');
const subNavigation = document.querySelector('[data-sub-nav]');

subContents.forEach((elem) => {
  elem.classList.remove('is-nojs');
});

subscrButtons.forEach((elem) => {
  elem.classList.remove('is-nojs');
});

const clickOnSubNav = () => {
  if (!subNavigation) {
    return;
  }

  subNavigation.addEventListener('click', function (evt) {
    const targetButton = evt.target.closest('[data-sub-button]');
    if (targetButton) {
      addClassOnButton(targetButton);
    }
  });
};

const addClassOnButton = (targetButton) => {
  let currentId = targetButton.getAttribute('data-but');
  let currentTab = document.querySelector(`[data-tab='${currentId}']`);

  if (!currentTab) {
    return;
  }

  if (!targetButton.classList.contains('is-active')) {
    subscrButtons.forEach((elem) => {
      elem.classList.remove('is-active');
    });

    subContents.forEach((el) => {
      el.classList.remove('is-active');
    });

    targetButton.classList.add('is-active');
    currentTab.classList.add('is-active');
  }
};

export {clickOnSubNav};
