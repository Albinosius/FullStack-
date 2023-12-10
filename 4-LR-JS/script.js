'use strict';

// Код валидации формы
function validateForm(options) {
  const formId = options.formId;
  const formValidClass = options.formValidClass;
  const formInvalidClass = options.formInvalidClass;
  const inputErrorClass = options.inputErrorClass;

  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input");

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let hasErrors = false;

    inputs.forEach(function(input) {
      const validator = input.dataset.validator;
      const value = input.value.trim();

      if (validator) {
        const validationTypes = validator.split(' ');

        validationTypes.forEach(function(type) {
          if (type === 'required' && value === '') {
            input.classList.add(inputErrorClass);
            hasErrors = true;
          }

          if (type === 'number' && isNaN(value)) {
            input.classList.add(inputErrorClass);
            hasErrors = true;
          }

          if (type === 'letters' && !/^[a-zA-Zа-яА-Я]+$/.test(value)) {
            input.classList.add(inputErrorClass);
            hasErrors = true;
          }
          
          if (type === 'regexp' && !value.match(new RegExp(input.dataset.validatorPattern))) {
            input.classList.add(inputErrorClass);
            hasErrors = true;
          }
        });
      }
    });

    if (!hasErrors) {
      form.classList.remove(formInvalidClass);
      form.classList.add(formValidClass);
    } else {
      form.classList.remove(formValidClass);
      form.classList.add(formInvalidClass);
    }
  });

  inputs.forEach(function(input) {
    input.addEventListener('blur', function() {
      const validator = input.dataset.validator;
      const value = input.value.trim();

      if (validator) {
        const validationTypes = validator.split(' ');

        validationTypes.forEach(function(type) {
          if (type === 'required' && value === '') {
            input.classList.add(inputErrorClass);
          }

          if (type === 'number' && isNaN(value)) {
            input.classList.add(inputErrorClass);
          }

          if (type === 'letters' && !/^[a-zA-Zа-яА-Я]+$/.test(value)) {
            input.classList.add(inputErrorClass);
          }
          
          if (type === 'regexp' && !value.match(new RegExp(input.dataset.validatorPattern))) {
            input.classList.add(inputErrorClass);
          }
        });
      }
    });

    input.addEventListener('focus', function() {
      input.classList.remove(inputErrorClass);
    });
  });
}

