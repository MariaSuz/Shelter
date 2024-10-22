import {cartsItem} from './js/cartsData.js';
import {createCarts} from './js/createCarts.js';
import {createPopUp} from './js/popup.js';
import './js/burger.js';


//Выполняю скрипт при изменении размера окна
  window.addEventListener('resize', function(){
    itemsPerPage = widthSee();
    countOfItems = Math.ceil(cloneMixidCartsItems.length / itemsPerPage);
});


let currentPage = 1;
let itemsPerPage = 8;

const pageNumber = document.querySelector('.button-friends_number');
const endButton = document.getElementById('end');
const startButton = document.getElementById('start');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

//Первоначальная инициализация кнопок.
startButton.disabled = currentPage === 1;
prevButton.disabled = currentPage === 1;
pageNumber.textContent = currentPage;


 //=======Работа с карточками! ====

//Создаю новый массив  [ [], [], [] ]
function masivPush(arr) {
    let copy = [];
    for (let i = 0; i < 6; i++) {
       copy.push([...arr]);
    }
    return copy;
}

//функция для рандомной сортировки
function mixArray(arr) {
    for (let subArr of arr) {
        subArr.sort(() => Math.random() - 0.5);
    }
}

let cloneCartsItems = [];
cloneCartsItems = masivPush(cartsItem);
mixArray(cloneCartsItems); //преобразуем в рандом

//Склеиваю массив
let cloneMixidCartsItems = [].concat(...cloneCartsItems);

let countOfItems = Math.ceil(cloneMixidCartsItems.length / itemsPerPage); //количество страниц


function showPageCarts(currentPage) {
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let note = cloneMixidCartsItems.slice(startIndex, endIndex);
    let cards = document.querySelector('.friends__cards-container');
    cards.innerHTML = '';
    return createCarts(note);
}

// Первоначальная инициализация карточек
showPageCarts(1) ;

//===== Работа с кнопками===
function buttonsDisabled () {
    startButton.disabled = false;
    prevButton.disabled = false;
    endButton.disabled = false;
    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentPage++;
    pageNumber.textContent = currentPage;
    buttonsDisabled();
    if ( currentPage === countOfItems) {
        endButton.disabled = true;
        nextButton.disabled = true;
    }
    showPageCarts(currentPage);
 }
)
 prevButton.addEventListener('click', () => {
    currentPage--;
    pageNumber.textContent = currentPage;
    buttonsDisabled ()
    if ( currentPage === 1) {
        startButton.disabled = true;
        prevButton.disabled = true;
    }
    showPageCarts(currentPage);
 }
 )
 startButton.addEventListener('click', () => {
    currentPage = 1;
    buttonsDisabled ();
    startButton.disabled = true;
    prevButton.disabled = true;
    pageNumber.textContent = currentPage;
    showPageCarts(currentPage);
 }
)
endButton.addEventListener('click', () => {
    currentPage = countOfItems;
    buttonsDisabled ();
    endButton.disabled = true;
    nextButton.disabled = true;
    pageNumber.textContent = currentPage;
    showPageCarts(currentPage);
 }
 )


 function widthSee() {
    let width = window.innerWidth;
    let pagesPage = 0;

    if (width <= 639) {
        pagesPage = 3;
    } else if (width <= 768) {
        pagesPage = 6;
    }
    else {
        pagesPage = 8;
    }
    return pagesPage;
 }


//=========================================Попап==========================================================
createPopUp();