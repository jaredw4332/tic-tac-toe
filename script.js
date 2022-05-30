// game board factory function
// function to make a space x
// function to make a space o
// space on click triggers function which pushes letter to corresponding position in array
// reset function which loops through array assigning every position to inital number


const gameboard = (() => {
    const gameboardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    
    const move = (turn, position) => gameboardArray.splice(position, 1, turn)
    const checkArray = (position) => console.log(gameboardArray[position])

    return {
        move,
        checkArray
    }
})()


gameboard.move('x', 0)
gameboard.checkArray(0)
gameboard.move('o', 1)
gameboard.checkArray(0)
gameboard.checkArray(1)

// if statement which checks for a certain class to figure out who's turn it is

const displayController = (() => {
    const move = (turn, position) => {
        let target = document.getElementById(position)
        target.textContent = turn
        gameboard.move(turn, position)
    }

    return {
        move
    }
})()

displayController.move('x', 4)
gameboard.checkArray(4)