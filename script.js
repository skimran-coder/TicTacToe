const playerInfo = document.querySelector('.player-info')
const boxes = document.querySelectorAll('.box')

let currentPlayer = 'X'
let boxStatus = ["","","","","","","","",""]
let winningPattern = [
['0','1','2'],
['3','4','5'],
['6','7','8'],
['0','3','6'],
['1','4','7'],
['2','5','8'],
['0','4','8'],
['2','4','6']
]

console.log(winningPattern);

initGame()

function initGame(){
    playerInfo.innerText = `Current Player - ${currentPlayer}`
}

function switchCurrentPlayer(){
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        box.innerText = `${currentPlayer}`
        boxStatus[index] = `${currentPlayer}`
        switchCurrentPlayer();
        checkWinner()
        console.log(boxStatus);

    })
})
