let squares = document.querySelectorAll('.square');
let startGameButton = document.querySelector('.newGame')
let quitGameButton = document.querySelector('.quitGame')
let clock = document.querySelector('clock')
let isFirstCardSelected = false;
let isSecondCardSelected = false;
let firstPickedCard;
let firstPickedCardValue = [];
let myTimer;
let numArray = [];
let copyNumArray = [];
let matches = 0;
let numOfMatches = document.getElementById('correctMatches');
let num = Math.floor(Math.random() * 4)
let square1 = squares[0];
let square2 = squares[1];
let square3 = squares[2];
let square4 = squares[3];
let square5 = squares[4];
let square6 = squares[5];
let square7 = squares[6];
let square8 = squares[7];
let cardNums;
//First, initializing 2 arrays

//Creating array of random number for half cards that doesnt repeat

//Combining both arrays in 1 to set up next function which gives cards numbers


//Setting logic fr newGame
startGameButton.addEventListener('click', newGame);
function newGame () {
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
    cardNums = numArray.concat(copyNumArray);
    //Setting vales & event listeners for each card
    for (let i = 0; i<squares.length; i++){
        squares[i].addEventListener('click', function ()  {
            if(!isFirstCardSelected) {
                squares[i].innerHTML = cardNums[i];
                isFirstCardSelected = true;
                firstPickedCard = squares[i]
                firstPickedCardValue.push(cardNums[i])
            } else showSecondCard(squares[i], i);

        })
    }
    
    console.log(cardNums)
}
// startGameButton.addEventListener('click', newGame);




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
// function hide(whichSquare) {
//     document.getElementById('whichSquare').style.display = 'none'
//  }


//   hide(square1);
function showFirstCard (square, squareValue) {
    if ( isFirstCardSelected == false){
        //isFirstCardSelected = true;
        square.innerHTML = squareValue;
    }
}

function showSecondCard (square, idx) {
    if(firstPickedCard.innerHTML == cardNums[idx]){
        square.innerHTML = cardNums[idx];
        matches++
        numOfMatches.innerHTML = `Correct Matches ${matches}`
        firstPickedCard = false;
        isFirstCardSelected = false;
    } else { 
        //show cardnum [idx]
        firstPickedCard.innerHTML = ''
        firstPickedCard = false;
        isFirstCardSelected = false;
    }
}

// }
// Quit game function clears board
quitGameButton.addEventListener('click', quitGame)
function quitGame (){
        for ( i=0; i<squares.length; i++){
            squares[i].innerHTML = ''
        } 
    matches = 0
    numOfMatches.innerHTML = `Correct Matches ${matches}`  
}
//trying to set event listener for each card so I can show card after click
// for (let i = 0; i < squares.length; i++){

// }

// function startTimer(seconds) {
//     myTimer = seconds;
//     const interval = setInterval( function () {
//         clock.innerHTML = (`$(myTimer)`)
//         myTimer--;
//         if (myTimer <0) {
//             clearInterval(interval);
//             clock.innerHTML = ('Time is up!! GAME OVER!');
//         }
//     }, 1000);
// }


//unfinished
// selectACard.addEventListener('click', function () {

// })
// startGameButton.addEventListener('click', newGame);