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
let flippedCards = [];
let matchedCards = [];
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

function flipCard(event){
    let clickedIndex = event.target.getAttribute('data-id');
    event.target.setAttribute('src', cards[clickedIndex].image);

    if(flippedCards.includes(clickedIndex)){
        event.target.setAttribute('src', 'images/blank.png')
        flippedCards = []
    }else{
        flippedCards.push(clickedIndex);
        matchedCards.push(clickedIndex);
    }

    if(flippedCards.length === 2 ){
        flippedCards = []
    }

    if( matchedCards.length === 2){

        setTimeout(matching, 500); // Call matching function after a delay
    }
}


function matching(){

    if(matchedCards.length === 2){
        let firstImage = matchedCards[0]
        let secondImage = matchedCards[1]

        if(cards[firstImage].name === cards[secondImage].name){
            score++;
            console.log("Score: " + score);
        }
    }
}
