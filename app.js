let squares = document.querySelectorAll('.square');
let startGameButton = document.querySelector('.newGame')
let quitGameButton = document.querySelector('.quitGame')

let square1 = squares[0];
square1.innerHTML = 'haha'
let square2 = squares[1];
let square3 = squares[2];
let square4 = squares[3];
let square5 = squares[4];
let square6 = squares[5];
let square7 = squares[6];
let square8 = squares[7];
console.log(square8)
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
//Assign numbers to squares
square1 = numArray[0];
square2 = numArray[1];
square3 = numArray[2];
square4 = numArray[3];
square5 = numArray[4];
square6 = numArray[5];
square7 = numArray[6];
square8 = numArray[7];
console.log(square8)

console.log(square8 + 'THIS IS THE LAST SQUARES NUM')
// for (i=0; i<squares.length; i++){
    
// }

//Creating second array for other half of cards
num = Math.floor(Math.random() * 4)
for (let i = 0; i<4; i++){
    while (copyNumArray.includes(num)) {
        num = Math.floor(Math.random() * 4);
    }
    copyNumArray.push(num);
}

//Combining both arrays in 1 to set up next function which gives cards numbers
let cardNums = numArray.concat(copyNumArray);
console.log(cardNums);
square1.innerHTML = '8'
console.log(square1.innerHTML + 'o k')
//Setting logic for newGame
function newGame (numbers) {
    //Setting values & event listeners for each card
    for (let i = 0; i<squares.length; i++){
        squares[i].innerHTML =numbers[i];
        // squares[i].addEventListener('click', function () {// clickSquare function check match here
            // squares[i].innerHTML = numbers[i];
            // checkMatch(squares[i].innerHTML)
        // })
    }

}
newGame(cardNums);




//  function checkMatch (firstGuessCard) {
//      for (let i=0; i<squares.length; i++){
//         squares[i].addEventListener('click', function () {
//             for (let i=0; i<squares.length; i++){
//                 for (let j=0; j<squares.length; j++) {  
//                     if (squares[i].innerHTML !== squares[j].innerHTML) {
//                          squares[j].innerHTML = ''         
//                          squares[i].innerHTML = ''
//                     }
//                 }
//             }
//         })
//      }   
//  }
// console.log(newGame(cardNums));
// Working on hide and reveal logic

//  squares[i].addEventListener('click', function () {
//      squares[i].innerHTML = numbers[i];
//  })



//unfinished
function hide(whichSquare) {
    document.getElementById('whichSquare').style.display = 'none'
 }
  hide(square1);
// Quit game function clears board
quitGameButton.addEventListener('click', quitGame)
function quitGame (){
        for ( i=0; i<squares.length; i++){
            squares[i].innerHTML = ''
        } 
}
//trying to set event listener for each card so I can show card after click
// for (let i = 0; i < squares.length; i++){

// }



//unfinished
// selectACard.addEventListener('click', function () {

// })
// startGameButton.addEventListener('click', newGame);