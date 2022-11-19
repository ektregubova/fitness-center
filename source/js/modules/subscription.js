const subscrButtons = document.querySelectorAll('[data-sub-button]');
const subContents = document.querySelectorAll('[data-sub-tab]');

subContents.forEach((elem) => {
  elem.classList.remove('is-nojs');
});

function addClickOnButtonSubscr() {
  subscrButtons.forEach((button) => {
    button.addEventListener('click', function () {

      let currentId = button.getAttribute('data-but');
      let currentTab = document.querySelector(`[data-tab='${currentId}']`);

      if (!currentTab) {
        return;
      }

      if (!button.classList.contains('is-active')) {
        subscrButtons.forEach((elem) => {
          elem.classList.remove('is-active');
        });

        subContents.forEach((el) => {
          el.classList.remove('is-active');
        });

        button.classList.add('is-active');
        currentTab.classList.add('is-active');
      }
    });
  });
}

export {addClickOnButtonSubscr};
