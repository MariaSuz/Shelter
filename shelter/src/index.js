import {cartsItem} from './js/cartsData.js';
import {createCartsSliders} from './js/createCarts.js';
import "./js/popupmain.js";
import "./js/burger.js";

//=========================================Слайдер==========================================================
//Создаю 3 массива для карточек
let itemRight = [];
let itemCurrent = [];
let itemLeft = [];
const ITEM_RIGTH = document.querySelector('#item-right');
let changedItem = document.querySelector('#item-active');
const ITEM_LEFT = document.querySelector('#item-left');
// const CURRENT = document.querySelector('#item-left');

function createItemArrCurrent() {
  itemCurrent = [];
  const arrayCopy = Array.from(cartsItem);
  do {
      itemCurrent[itemCurrent.length] = arrayCopy.splice(
          Math.floor(Math.random() * arrayCopy.length),
           1)[0];
    } while ( itemCurrent.length < 3);
}

function createItemArrRight() {
  itemRight = [];
  const arrayCopy = Array.from(cartsItem);
  do {
      itemRight[  itemRight.length] = arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1)[0];
    } while (  itemRight.length < 3);
}

function createItemArrLeft() {
  itemLeft = [];
  const arrayCopy = Array.from(cartsItem);
  do {
      itemLeft[itemLeft.length] = arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1)[0];
    } while (  itemLeft.length < 3);
}

createItemArrCurrent();
createItemArrRight();
createItemArrLeft();


createCartsSliders(itemCurrent, changedItem);
createCartsSliders(itemLeft, ITEM_LEFT);
createCartsSliders(itemRight, ITEM_RIGTH);


const SLIDER_LINE = document.querySelector('.slider__container');
const BUTTON_LEFT =  document.querySelector('.button_arrow_left');
const BUTTON_RIGHT =  document.querySelector('.button_arrow_right');


function nextslider() {
  SLIDER_LINE.classList.add('transition-right');
  //защита, чтобы несколько раз не нажимали, потом возвращаем в конце анимации
  BUTTON_RIGHT.removeEventListener('click', nextslider);
  BUTTON_LEFT.removeEventListener('click', prevslider);
}

function prevslider() {
  SLIDER_LINE.classList.add('transition-left');
  BUTTON_LEFT.removeEventListener('click', prevslider);
  BUTTON_RIGHT.removeEventListener('click', nextslider);
}

SLIDER_LINE.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left'){
      SLIDER_LINE.classList.remove('transition-left');

     // let left = ITEM_LEFT.innerHTML;

     // itemCurrent = itemLeft;
     // changedItem = ITEM_LEFT;
       changedItem.innerHTML = ITEM_LEFT.innerHTML;
       itemCurrent = itemLeft;

       createItemArrRight();
       createItemArrLeft();

      ITEM_LEFT.innerHTML = '';
      ITEM_RIGTH.innerHTML = '';

      createCartsSliders(itemLeft, ITEM_LEFT);
      createCartsSliders(itemRight, ITEM_RIGTH);
  }
  else {
      SLIDER_LINE.classList.remove('transition-right');

      changedItem.innerHTML  = ITEM_RIGTH.innerHTML;
      itemCurrent = itemRight;

      createItemArrRight();
      createItemArrLeft();

      ITEM_LEFT.innerHTML = '';
      ITEM_RIGTH.innerHTML = '';

      createCartsSliders(itemLeft, ITEM_LEFT);
      createCartsSliders(itemRight, ITEM_RIGTH);
  }

  BUTTON_RIGHT.addEventListener('click', nextslider);
  BUTTON_LEFT.addEventListener('click', prevslider);
});

console.log(changedItem)

//EVENT LISTENERS
BUTTON_RIGHT.addEventListener('click', nextslider);
BUTTON_LEFT.addEventListener('click', prevslider);


