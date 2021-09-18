import './main.scss';

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('keyup', () => {
    input.classList.add('changed');
  });
});

const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

passwordConfirm.addEventListener('keyup', () => {
  // eslint-disable-next-line no-unused-expressions
  passwordConfirm.value !== password.value
    ? passwordConfirm.setCustomValidity(`Passwords Don't match`)
    : passwordConfirm.setCustomValidity('');
});
