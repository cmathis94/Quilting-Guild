//Form Validation
(() => {
    'use strict';

    const forms = document.querySelectorAll('.formValidation');

    Array.from(forms).forEach(form => {
      form.addEventListener(
        'submit',
        event => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        },
        false
      );
    });
  })();

//Email process
const form = document.getElementById('contact-form');

const formEvent = form.addEventListener('submit', (event) => {
    event.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
});