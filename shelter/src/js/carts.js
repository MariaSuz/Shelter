const cartsItem = [
    {
        'id' : 1,
        'name' : 'Katrine',
        'animal' : 'Cat - British Shorthair',
        'src' : 'src/img/pets-katrine.png',
        'alt' : 'Katrine',
        'description' : 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    },
    {
        'id' : 2,
        'name' : 'Jennifer',
        'animal' : 'Dog - Labrador',
        'src' : 'src/img/pets-jennifer.png',
        'alt' : 'pets-jennifer',
        'description' : "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    },
    {
        'id' : 3,
        'name' : 'Woody',
        'animal' : 'Dog - Golden Retriever',
        'src' : 'src/img/pets-woody.png',
        'alt' : 'pets-woody',
        'description' : 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    },
    {
        'id' : 4,
        'name' : 'Sophia',
        'animal' : 'Dog - Shih tzu',
        'src' : 'src/img/pets-sophia.png',
        'alt' : 'pets-sophia',
        'description' : 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
    },
    {
        'id' : 5,
        'name' : 'Scarlett',
        'animal' : 'Dog - Jack Russell Terrier',
        'src' : 'src/img/pets-scarlet.png',
        'alt' : 'pets-scarlett',
        'description' : 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    },
    {
        'id' : 6,
        'name' : 'Timmy',
        'animal' : 'Cat - British Shorthair',
        'src' : 'src/img/pets-timmy.png',
        'alt' : 'pets-timmy',
        'description' : 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    },
    {
        'id' : 7,
        'name' : 'Freddie',
        'animal' : 'Cat - British Shorthair',
        'src' : 'src/img/pets-freddie.png',
        'alt' : 'pets-freddie',
        'description' : 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    },
    {
        'id' : 8,
        'name' : 'Charly',
        'animal' : 'Dog - Jack Russell Terrier ',
        'src' : 'src/img/pets-charly.png',
        'alt' : 'pets-charly',
        'description' : 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    },
    {
        'id' : 9,
        'name' : 'Scarlett',
        'animal' : 'Dog - Jack Russell Terrier',
        'src' : 'src/img/pets-scarlet.png',
        'alt' : 'pets-scarlett',
        'description' : 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    }
]


cartsItem.forEach( (res) => {
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

    let cards = document.querySelector('.slider__container');
    cards.appendChild(sliderCard);

});
