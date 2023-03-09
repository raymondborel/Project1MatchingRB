let squares = document.querySelectorAll('.square');
// console.log(squares)
// console.log(squares[0]);
let startGameButton = document.querySelector('.newGame')
// console.log(startGameButton)
let random = [1,1,2,2,3,3,4,4];
let randomCopy = random

//
// console.log(random[7])

//Setting values for each card at newGame
function newGame () {
    for (let i = 0; i<squares.length; i++){
        squares[i]=random[i];
        Math.floor(Math.random() * 10);
        squares[i].addEventListener('click', function () {
            // console.log(random[i]);
            squares[i].innerHTML = random[i]
        })
    }
}
console.log(newGame);
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
startGameButton.addEventListener('click', newGame);//