const form = document.querySelector('[data-form]');
const formButton = document.querySelector('[data-form-button]');
const validFormArray = [];

let formArray;
let errorMessage = document.createElement('span');
errorMessage.textContent = 'Введите корректные данные и заполните пустые поля';

if (form) {
  formArray = Array.from(form);
}

if (formArray) {
  formArray.forEach((elem) => {
    if (elem.hasAttribute('data-reg')) {
      elem.setAttribute('is-valid', '');
      validFormArray.push(elem);
    }
  });
}

const checkEmptyInputs = () => {
  if (!formArray) {
    return;
  }

  formArray.forEach(function (input) {
    if (input.value === '') {
      input.setAttribute('is-valid', '0');
    }
  });
};

const inputCheck = (elem) => {
  const inputValue = elem.value;
  const inputReg = elem.getAttribute('data-reg');
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    elem.setAttribute('is-valid', '1');
    errorMessage.remove();
  } else {
    elem.setAttribute('is-valid', '0');
  }
};

const inputHandler = ({target}) => {
  if (target.hasAttribute('data-reg')) {
    inputCheck(target);
  }
};

const buttonHandler = (evt) => {
  checkEmptyInputs();
  const allValid = [];
  validFormArray.forEach((elem) => {
    allValid.push(elem.getAttribute('is-valid'));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return Boolean(Number(acc)) && Boolean(Number(current));
  });

  if (!isAllValid) {
    form.insertAdjacentElement('beforeend', errorMessage);
    evt.preventDefault();
  } else {
    errorMessage.remove();
  }
};

const validateForm = () => {
  if (!form || !formButton) {
    return;
  }

  form.addEventListener('input', inputHandler);
  formButton.addEventListener('click', buttonHandler);
};

export {validateForm};
