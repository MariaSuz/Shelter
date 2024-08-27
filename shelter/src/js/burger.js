const burgerButton = document.querySelector('.burger-button');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.navigation__link');
const body = document.body;

function toggleBurger() {
    burgerButton.classList.toggle('burger-button_active');
    menu.classList.toggle('open');
    body.classList.toggle('noscroll');
}


burgerButton.addEventListener('click', toggleBurger);


//При нажатии на ссылки, закрыть меню
// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });
  
  // Закрытие попапа при клике на меню
  function closeOnClick() {
    burgerButton.classList.remove('burger-button_active');
    menu.classList.remove('open');
    body.classList.remove('noscroll');
  }


  //прячу меню при клике вне меню
document.addEventListener('click', (e) =>
{ // проверяем, что элемент на который кликнули (e.target) не находится в блоке .burger-wrap
    if (!menu.contains(e.target)) {
        menu.classList.remove('open');
        body.classList.remove('noscroll');
        burgerButton.classList.remove('burger-button_active');
    }
})

