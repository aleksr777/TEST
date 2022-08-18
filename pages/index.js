
/* Переменные для секции Фотопроекты spec-projects*/
let offset = 0; // cмещение от левого края
const sliderLine = document.querySelector('.spec-projects__slider-line');
const fotoSpecProjects = document.querySelector('.spec-projects__foto');
const buttonLeftSpecProjects = document.querySelector('.spec-projects__button-left');
const buttonRightSpecProjects = document.querySelector('.spec-projects__button-right');


/* Для слайдера */
buttonLeftSpecProjects.setAttribute('disabled', 'disabled');
buttonRightSpecProjects.addEventListener('click', () => {
  buttonLeftSpecProjects.removeAttribute('disabled');
  offset = offset + fotoSpecProjects.clientWidth;
  if (offset > (sliderLine.clientWidth - fotoSpecProjects.clientWidth)) {
    offset = sliderLine.clientWidth - fotoSpecProjects.clientWidth;
  }
  sliderLine.style.left = -offset + 'px';
  if (offset > (sliderLine.clientWidth - (2 * fotoSpecProjects.clientWidth))) {
    buttonRightSpecProjects.setAttribute('disabled', 'disabled');
  }
});

buttonLeftSpecProjects.addEventListener('click', () => {
  buttonRightSpecProjects.removeAttribute('disabled');
  offset = offset - fotoSpecProjects.clientWidth;
  if (offset < 0) {
    offset = 0
  }
  if (offset < fotoSpecProjects.clientWidth) {
    buttonLeftSpecProjects.setAttribute('disabled', 'disabled');
  }
  sliderLine.style.left = -offset + 'px';
  sliderLine.clientWidth;
});




