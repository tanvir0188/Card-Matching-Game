const cards = [
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'hot dog',
        image: 'images/hotdog.png'
    },
    {
        name: 'hot dog',
        image: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    }
];

function randomComparator() {
    return Math.random() - 0.5;
}

cards.sort(randomComparator);

const display = document.querySelector('#grid');
let flippedCards = [];// data-id of the flipped cards
let matchedCards = [];//for the cards that matched
let score = 0;

function createBoard(){
    for (let i = 0; i<cards.length ; i++){
        let img = document.createElement('img')
        img.setAttribute('src', 'images/blank.png')
        img.setAttribute('data-id', i)
        img.addEventListener('click', flipCard)

        display.append(img)
    }
}

createBoard()

function flipCard() {
    let clickedDataId = this.getAttribute('data-id');

    flippedCards.push(clickedDataId);
    this.setAttribute('src', cards[clickedDataId].image)

    if (flippedCards.length === 2){
        matchingCards()
    }

}

function matchingCards(){
    let firstCard = flippedCards[0]
    let secondCard = flippedCards[1]
    const imgArray = document.querySelectorAll('img') // gets the array of every img

    if(firstCard === secondCard){
        const img = document.querySelector(`img[data-id="${firstCard}"]`);
        img.setAttribute('src', 'images/blank.png');
        flippedCards = []
    }
    else if (cards[firstCard].name === cards[secondCard].name){
        matchedCards.push(firstCard, secondCard)
        document.getElementById('result').innerHTML = matchedCards.length/2

        imgArray[firstCard].setAttribute('src', 'images/white.png')
        imgArray[secondCard].setAttribute('src', 'images/white.png')

        imgArray[firstCard].removeEventListener('click', flipCard)
        imgArray[secondCard].removeEventListener('click', flipCard)
    }
    else if(cards[firstCard].name !== cards[secondCard].name){
        alert('You lost! try again')
        imgArray[firstCard].removeEventListener('click', flipCard)
        imgArray[secondCard].removeEventListener('click', flipCard)

    }

    if(imgArray)

    if  (matchedCards.length/2 === 5) {
        document.getElementById('result').innerHTML = 'Congratulations! You found them all!'
    }
    flippedCards = []


    console.log(flippedCards)
}









