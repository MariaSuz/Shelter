const sliderLine = document.querySelector('.slider__container');
const buttonLeft =  document.querySelector('.button_arrow_left');
const buttonRight =  document.querySelector('.button_arrow_right');

let sliderCount = 0,
    sliderWidth = -520;


//Ширина ленты
function showSlider (){
    sliderLine.style.width = sliderWidth * 3 + 'px';
    rollSlider();
}

//Вызываю её
showSlider();

//Влево слайдер
function nextslider () {
    sliderCount ++;
    if (sliderCount >= 3) sliderCount = 0;
    rollSlider();
}


    // Вправо слайдер
function prevslider ()  {
    sliderCount --;
    if (sliderCount < 0) sliderCount = 3 - 1;
    rollSlider();
}

//Задает шаг слайдов
function rollSlider () {
    sliderLine.style.transform = `translateY(${sliderCount * sliderWidth}px)`;
}

//EVENT LISTENERS
buttonRight.addEventListener('click', nextslider);
buttonLeft.addEventListener('click', prevslider);