const playerInfo = document.querySelector('.player-info')
const boxes = document.querySelectorAll('.box')
const newGameButton = document.querySelector('.new-game')

let currentPlayer = 'X'
let fillCount = 0;
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
    currentPlayer = 'X'
    fillCount = 0;
    answer = "";
    playerInfo.innerText = `Current Player - ${currentPlayer}`
    boxStatus = ["","","","","","","","",""]
    newGameButton.classList.remove("active");

    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "all";
    })

}

function switchCurrentPlayer(){
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }

    playerInfo.innerText = `Current Player - ${currentPlayer}`
}

function checkWinner(){
    let answer = "";

    winningPattern.forEach((position) => {
        if (boxStatus[position[0]] != "" && boxStatus[position[1]] != "" && boxStatus[position[2]] != "" &&
        boxStatus[position[0]] === boxStatus[position[1]] && boxStatus[position[1]] === boxStatus[position[2]]) {
            console.log("winner");
            answer = boxStatus[position[0]]
            playerInfo.innerText = `Winner Player - ${answer}`
            // currently writing here
            
            gameOver()
        }

        function gameOver(){
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
                newGameButton.classList.add("active");
            })
        }

        if (answer === "" && fillCount === 9) {
            playerInfo.innerText = `It's a Draw`
            gameOver()
        }

        console.log(fillCount);



    })
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        box.innerText = `${currentPlayer}`
        boxStatus[index] = `${currentPlayer}`
        box.style.pointerEvents = "none";
        fillCount++;
        switchCurrentPlayer();
        checkWinner()
        console.log(boxStatus);

    })
})

newGameButton.addEventListener('click', initGame);
