const sliderLine = document.querySelector('.slider__container');
const buttonLeft =  document.querySelector('.button_arrow_left');
const buttonRight =  document.querySelector('.button_arrow_right');


sliderWidth = 1080;

    showSlider();
    // window.onload = function() {
    //     showSlider();
    //     const sliderDives = document.querySelectorAll('.slider__card');
    //  };

//Ширина ленты
function showSlider (){
    sliderLine.style.width = sliderWidth  + 'px';
    rollSlider();
}
//Влево слайдер
function nextslider () {
    debugger
    sliderCount ++;
    if (sliderCount >= sliderDives.length) sliderCount = 0;
    rollSlider();
}


    // Вправо слайдер
function prevslider ()  {
    sliderCount --;
    if (sliderCount < 0) sliderCount = sliderDives.length - 1;
    rollSlider();
}

//Задает шаг слайдов
function rollSlider () {
    debugger
    sliderLine.style.transform = `translateY(${sliderCount * sliderWidth}px)`;
}

//EVENT LISTENERS
buttonRight.addEventListener('click', nextslider);
buttonLeft.addEventListener('click', prevslider);