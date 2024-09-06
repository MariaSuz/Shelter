const modal = document.querySelector('.modal');
const modalOpen = document.querySelectorAll('.slider__card');
const modalClose = document.querySelector('.modal__close-button');

// Для каждого элемента при клике вызываем ф-ию
modalOpen.forEach((link) => {
  link.addEventListener("click", openModal);
});

function openModal() {
  modal.classList.add('modal-open');
  body.classList.add('noscroll');
}

//прячу меню при клике вне меню и крестик
modalClose.addEventListener('click', closeModal);
function closeModal() {
  modal.classList.remove('modal-open');
}

//прячу при клике вне модального меню
document.addEventListener( 'click', (event) => {
  if (event.target == modal) {
    closeModal();
    body.classList.remove('noscroll');
   }
})
