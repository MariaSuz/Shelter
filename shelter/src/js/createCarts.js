function createCartsSliders(arr, item) {
    arr.forEach( (res) => {
    let divItem = item;
    let sliderCard = document.createElement('div');
    sliderCard.id = res.id;
    sliderCard.classList.add('slider__card');

    let imageCard = document.createElement('img');
    imageCard.src = res.src;
    imageCard.alt = res.alt;
    sliderCard.appendChild(imageCard);

    let textCard = document.createElement('span');
    textCard.classList.add('slider__card__text');
    textCard.textContent = res.name;
    sliderCard.appendChild(textCard);

    let buttonCard = document.createElement('button');
    buttonCard.textContent = "Learn more";
    buttonCard.classList.add('button');
    buttonCard.classList.add('button_card');
    sliderCard.appendChild(buttonCard);

    // let cards = document.querySelector('.slider__container');
    // cards.appendChild(sliderCard);
    divItem.appendChild(sliderCard);
});
}


//создаю карточку модального окна
function createModal(arr) {
    arr.forEach( (value) => {
        let modalContainer = document.createElement('div');
        let buttonModal = document.createElement('button');
        let buttonSpan = document.createElement('span');
        let modalWindow = document.createElement('div');
        let imageModal = document.createElement('img');
        let modalWindowContainer = document.createElement('div');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let modalText = document.createElement('span');
        let ul = document.createElement('ul');
 
        modalContainer.classList.add('modal__container');
        buttonModal.classList.add('modal__close-button');
        buttonSpan.classList.add('modal__close-button_span');
        modalWindow.classList.add('modal__window');
        imageModal.classList.add('modal__window__img');
        modalWindowContainer.classList.add('modal__window__container');
        h3.classList.add('h3__modal');
        h4.classList.add('h4_modal');
        modalText.classList.add('modal__text');
        ul.classList.add('modal__ul');
 
 
        imageModal.src = value.src;
        imageModal.alt = value.alt;
        h3.textContent = value.name;
        h4.textContent = value.animal;
        modalText.textContent = value.description;
 
        modalContainer.appendChild(buttonModal);
        modalContainer.appendChild(modalWindow);
        buttonModal.appendChild(buttonSpan);
        modalWindow.appendChild(imageModal);
        modalWindow.appendChild(modalWindowContainer);
        modalWindowContainer.appendChild(h3);
        modalWindowContainer.appendChild(h4);
        modalWindowContainer.appendChild(modalText);
        modalWindowContainer.appendChild(ul);
        // value.modal.forEach( (mod) => {
        //     let li = document.createElement('li');
        //     let span1 = document.createElement('span');
        //     let span2 = document.createElement('span');
        //     li.classList.add('modal__li');
        //     li.classList.add('modal__span');
        //     span1.textContent = mod.age;
        //     span2.textContent = mod.inoculations + ': ';
        //     li.appendChild(span2);
        //     li.appendChild(span1);
        //     ul.appendChild(li);
        // }
 
        //Создаю список, пока не сокращаю
        let liAge = document.createElement('li');
        let liIno = document.createElement('li');
        let liDis = document.createElement('li');
        let liPar = document.createElement('li');
        liAge.classList.add('modal__li');
        liIno.classList.add('modal__li');
        liDis.classList.add('modal__li');
        liPar.classList.add('modal__li');
        liAge.classList.add('modal__span');
        liIno.classList.add('modal__span');
        liDis.classList.add('modal__span');
        liPar.classList.add('modal__span');
        let spanAge = document.createElement('span');
        let spanIno = document.createElement('span');
        let spanDis = document.createElement('span');
        let spanPar = document.createElement('span');
        spanAge.classList.add('modal__span2');
        spanIno.classList.add('modal__span2');
        spanDis.classList.add('modal__span2');
        spanPar.classList.add('modal__span2');
        spanAge.textContent = 'Age: ';
        spanIno.textContent = 'Inoculations: ';
        spanDis.textContent = 'Diseases: ';
        spanPar.textContent = 'Parasites: ';
        let spanAge2 = document.createElement('span');
        let spanIno2 = document.createElement('span');
        let spanDis2 = document.createElement('span');
        let spanPar2 = document.createElement('span');
        spanAge2.textContent = value.age;
        spanIno2.textContent = value.inoculations;
        spanDis2.textContent = value.diseases;
        spanPar2.textContent = value.parasites;
        liAge.appendChild(spanAge);
        liAge.appendChild(spanAge2);
        liIno.appendChild(spanIno);
        liIno.appendChild(spanIno2);
        liDis.appendChild(spanDis);
        liDis.appendChild(spanDis2);
        liPar.appendChild(spanPar);
        liPar.appendChild(spanPar2);
        ul.appendChild(liAge);
        ul.appendChild(liIno);
        ul.appendChild(liDis);
        ul.appendChild(liPar);
      
        const modal = document.querySelector('.modal');
        modal.appendChild(modalContainer);
 
    });
    }

export {createCartsSliders, createModal};
