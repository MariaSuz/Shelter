const cartsItem = [
    {
        'id' : 1,
        'name' : 'Katrine',
        'animal' : 'Cat - British Shorthair',
        'src' : 'src/img/pets-katrine.png',
        'alt' : 'Katrine',
        'description' : 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
        'age' : '6 months',
        'inoculations': ['panleukopenia'],
        'diseases': ['none'],
        'parasites': ['none'],
    },
    {
        'id' : 2,
        'name' : 'Jennifer',
        'animal' : 'Dog - Labrador',
        'src' : 'src/img/pets-jennifer.png',
        'alt' : 'pets-jennifer',
        'description' : "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        'age' : "2 months",
        'inoculations': ['none'],
        'diseases': ['none'],
        'parasites': ['none'],
    },
    {
        'id' : 3,
        'name' : 'Woody',
        'animal' : 'Dog - Golden Retriever',
        'src' : 'src/img/pets-woody.png',
        'alt' : 'pets-woody',
        'description' : 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
        'age' : '3 years 6 months',
        'inoculations': ['adenovirus', 'distemper'],
        'diseases': ['right back leg mobility reduced'],
        'parasites': ['none'],
    },
    {
        'id' : 4,
        'name' : 'Sophia',
        'animal' : 'Dog - Shih tzu',
        'src' : 'src/img/pets-sophia.png',
        'alt' : 'pets-sophia',
        'description' : 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
        'age' : '"1 month',
        'inoculations': ['parvovirus'],
        'diseases': ['none'],
        'parasites': ['none'],
    },
    {
        'id' : 5,
        'name' : 'Scarlett',
        'animal' : 'Dog - Jack Russell Terrier',
        'src' : 'src/img/pets-scarlet.png',
        'alt' : 'pets-scarlett',
        'description' : 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
        'age' : '3 months',
        'inoculations': ['parainfluenza'],
        'diseases': ['none'],
        'parasites': ['none'],
    },
    {
        'id' : 6,
        'name' : 'Timmy',
        'animal' : 'Cat - British Shorthair',
        'src' : 'src/img/pets-timmy.png',
        'alt' : 'pets-timmy',
        'description' : 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
        'age' : '2 years 3 months',
        'inoculations': ['calicivirus','viral rhinotracheitis' ],
        'diseases': ['kidney stones'],
        'parasites': ['none'],
    },
    {
        'id' : 7,
        'name' : 'Freddie',
        'animal' : 'Cat - British Shorthair',
        'src' : 'src/img/pets-freddie.png',
        'alt' : 'pets-freddie',
        'description' : 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
        'age' : '2 months',
        'inoculations': ['rabies'],
        'diseases': ['none'],
        'parasites': ['none'],
    },
    {
        'id' : 8,
        'name' : 'Charly',
        'animal' : 'Dog - Jack Russell Terrier ',
        'src' : 'src/img/pets-charly.png',
        'alt' : 'pets-charly',
        'description' : 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
        'age' : '8 years',
        'inoculations': ['bordetella bronchiseptica', 'leptospirosis'],
        'diseases': ['deafness', 'blindness'],
        'parasites': ['lice', 'fleas'],
    }
]

//дублирую массив 6 раз
// window.onload = function() {
// let num = 6;
// while(num > 0){
// cartsItem = cartsItem.concat(array);
// num--}
// };
function createCarts(arr) {
arr.forEach( (res) => {
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

    let cards = document.querySelector('.friends__cards-container');
    cards.appendChild(sliderCard);

});
}

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
 const modal = document.querySelector('.modal');
 const modalOpen = document.querySelectorAll('.slider__card');
// const modalClose = document.querySelector('.modal__close-button');

//создаю карточку
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


    function openModal(modalCart) {
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