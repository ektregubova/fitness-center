const subscrButtons = document.querySelectorAll('[data-sub-button]');
const subContent = document.querySelectorAll('[data-sub-tab]');

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

        subContent.forEach((el) => {
          el.classList.remove('is-active');
        });

        button.classList.add('is-active');
        currentTab.classList.add('is-active');
      }
    });
  });
}

export {addClickOnButtonSubscr};
