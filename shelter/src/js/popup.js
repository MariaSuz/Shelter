const modal = document.querySelector('.pets__modal');
const buttonOpen = document.querySelector('.slider__card');
const buttonClose = document.querySelector('.modal__close-button');



buttonOpen.onclick = function () {
    modal.style.display = 'block';
  };

buttonClose.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };