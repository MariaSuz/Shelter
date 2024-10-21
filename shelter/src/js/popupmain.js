import {cartsItem} from './cartsData.js';
import {createModal} from './createCarts.js';
//=========================================Попап==========================================================
const modal = document.querySelector('.modal');
const modalOpen = document.querySelectorAll('.slider__card');
// const modalClose = document.querySelector('.modal__close-button');

   // Для каждого элемента при клике вызываем ф-ию
   modalOpen.forEach((link) => {
     link.addEventListener("click", (event) =>{
       //let id = event.target.id;
       console.log('opeeeeen!')
       debugger
       let id = event.target.closest("div").id
       //let id = 3;
       let modalCart = cartsItem.filter(function(cart) {
           return  cart.id == id;
           })
       openModal(modalCart);
     });
   });

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

   //let modalClose = document.querySelector('.modal__close-button');


   //прячу при клике вне модального меню
   document.addEventListener( 'click', (event) => {
     if (event.target == modal) {
       closeModal();
      }
   })


