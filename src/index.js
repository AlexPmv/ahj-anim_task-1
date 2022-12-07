import './css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.collapse__button');
  // const textWrapper = document.querySelector('.text__wrapper');
  const text = document.querySelector('.collapse__text');

  text.addEventListener('animationend', () => {
    if (text.classList.contains('animation-reverse')) {
      text.classList.remove('animation-reverse');
    }
  });

  btn.addEventListener('click', () => {
    if (text.classList.contains('animation')) {
      text.classList.remove('animation');
      text.classList.add('animation-reverse');

      return;
    }

    // if (text.classList.contains('animation-reverse')) {
    //   text.classList.remove('animation-reverse');
    //   text.classList.add('animation');
    // }

    // text.classList.remove('animation-reverse');
    text.classList.add('animation');
  });
});
