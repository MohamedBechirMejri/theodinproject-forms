import './main.scss';

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('keyup', () => {
    input.classList.add('changed');
  });
});
