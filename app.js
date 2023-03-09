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
console.log(numArray);
console.log(copyNumArray);

//Combining both arrays in 1 to set up next function which gives crads numbers
let cardNums = numArray.concat(copyNumArray);
console.log(cardNums);


//Setting values for each card at newGame
function newGame (numbers) {
    console.log(numbers)
    for (let i = 0; i<squares.length; i++){
        //Picking a number from random to add to card
        // let pickedNum = Math.floor(Math.random() * squares.length);
        // console.log(numbers[i])
        squares[i]=numbers[i];
        // Math.floor(Math.random() * squares.length);
        squares[i].addEventListener('click', function () {
            // console.log(random[i]);
            squares[i].innerHTML = numbers[i];
        })
    }
}
console.log(newGame(cardNums));
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