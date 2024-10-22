import {cartsItem} from './cartsData.js';
import {createModal} from './createCarts.js';
//=========================================Попап==========================================================

function createPopUp() {
const modal = document.querySelector('.modal');
const modalOpen = document.querySelectorAll('.slider__card');
const body = document.body;

   // Для каждого элемента при клике вызываем ф-ию
   modalOpen.forEach((link) => {
     link.addEventListener("click", (event) =>{
       //let id = event.target.id;
       let id = event.target.closest("div").id
       //let id = 3;
       let modalCart = cartsItem.filter(function(cart) {
           return  cart.id == id;
           })
       openModal(modalCart);
     });
   });

   console.log(modalOpen.length);

   function openModal(modalCart) {
       modal.innerHTML = '';
       createModal(modalCart)
       modal.classList.add('modal-open');
       body.classList.add('noscrollmodal');

       const modalClose = document.querySelector('.modal__close-button');
       //прячу меню при клике вне меню и крестик
        modalClose.addEventListener('click', closeModal);

   }

   //прячу меню при клике вне меню и крестик
   function closeModal() {
       modal.classList.remove('modal-open');
       body.classList.remove('noscrollmodal');
       modalClose.innerHTML = '';
     }

   //прячу при клике вне модального меню
   document.addEventListener( 'click', (event) => {
     if (event.target == modal) {
       closeModal();
      }
   })

  }

export {createPopUp};