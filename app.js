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
let square9 = squares[8];
let square10 = squares[9];
let square11 = squares[10];
let square12 = squares[11];
let cardNums;

startGameButton.addEventListener('click', newGame);
function newGame () {
    for (let i = 0; i<4; i++){
        while (numArray.includes(num)) {
            num = Math.floor(Math.random() * 4);
        }
        numArray.push(num);
    }
    num = Math.floor(Math.random() * 4)
    for (let i = 0; i<4; i++){
        while (copyNumArray.includes(num)) {
            num = Math.floor(Math.random() * 4);
        }
        copyNumArray.push(num);
    }
    cardNums = numArray.concat(copyNumArray);
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
    

}
function showFirstCard (square, squareValue) {
    if ( isFirstCardSelected == false){
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
        firstPickedCard.innerHTML = ''
        firstPickedCard = false;
        isFirstCardSelected = false;
    }
}
quitGameButton.addEventListener('click', quitGame)
function quitGame (){
        for ( i=0; i<squares.length; i++){
            squares[i].innerHTML = ''
        } 
    matches = 0
    numOfMatches.innerHTML = `Correct Matches ${matches}`  
}