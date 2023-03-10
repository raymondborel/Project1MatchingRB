let squares = document.querySelectorAll('.square');
let startGameButton = document.querySelector('.newGame')
//First, initializing 2 arrays
let numArray = [];
let copyNumArray = [];

//Creating array of random number for half cards that doesnt repeat
let num = Math.floor(Math.random() * 4)
for (let i = 0; i<4; i++){
    while (numArray.includes(num)) {
        num = Math.floor(Math.random() * 4);
    }
    numArray.push(num);
}
//Creating second array for other half of cards
num = Math.floor(Math.random() * 4)
for (let i = 0; i<4; i++){
    while (copyNumArray.includes(num)) {
        num = Math.floor(Math.random() * 4);
    }
    copyNumArray.push(num);
}
// console.log(numArray);
// console.log(copyNumArray);

//Combining both arrays in 1 to set up next function which gives cards numbers
let cardNums = numArray.concat(copyNumArray);
console.log(cardNums);


//Setting logic for newGame
function newGame (numbers) {
    //Setting values & event listeners for each card
    for (let i = 0; i<squares.length; i++){
        squares[i]=numbers[i];
        squares[i].addEventListener('click', function () {
            squares[i].innerHTML = numbers[i];
            checkMatch(squares[i].innerHTML)
        })
    }
    console.log(squares.innerHTML);
    

    // for (let i=0; i=squares.length; i++) {
    //     if (squares[i].innerHTML !== undefined) {
    //         for (let j=0; j<squares.length; j++) {
    //             if (squares[i].innerHTML !== squares[j].innerHTML) {
    //             squares[i].innerHTML = '';
    //             squares[j].innerHTML = '';
    //             }

    //         }
    //     }
    // }
    // for (let i = 0; i<squares.length; i++){
    //     for (let j=0; j<squares.length; j++) {
    //         if (squares[i].innerHTML !== squares[j].innerHTML) {
    //         squares[i].innerHTML = '';
    //         squares[j].innerHTML = '';
    //     }
    
    // }

}
function checkMatch (firstGuessCard) {
    for (let i=0; i<squares.length; i++){
        if (squares[i].innerHTML == firstGuessCard) {
            firstGuessCard = ''
            squares[i].innerHTML = ''
        }
    }

}
console.log(newGame(cardNums));
//Working on hide and reveal logic

// squares[i].addEventListener('click', function () {
//     squares[i].innerHTML = numbers[i];
// })



//unfinished
function showCard (clickedCard){
    clickedCard.innerHTML = squares
}

//trying to set event listener for each card so I can show card after click
// for (let i = 0; i < squares.length; i++){

// }



//unfinished
// selectACard.addEventListener('click', function () {

// })
// startGameButton.addEventListener('click', newGame);