const sliderline = document.querySelector('.slider__container');
const buttonLeft =  document.querySelector('.button_arrow_left');
const buttonRight =  document.querySelector('.button_arrow_right');

let count = 0;
let width;

// function init() {
//     width =  document.querySelector('.slider').offsetWidth;
//     sliderline.style.width = width * 8 + 'px';
// }

// init();


// // let position = 0;
// // const nextSlide = () => {
// //     position += 360;
// //     sliderline.style.left = -position + 'px';
// // }

// const nextSlide = () => {
//     count++;
//     sliderline.style.transform = 'translate(-'+count*width+'px)';
// }

// buttonRight.addEventListener('click', nextSlide);