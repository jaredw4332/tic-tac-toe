// game board factory function
// function to make a space x
// function to make a space o
// space on click triggers function which pushes letter to corresponding position in array
// reset function which loops through array assigning every position to inital number

// gear game towards tying everything together, reacting to button presses etc

const game = (() => {

    const gameboardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    
    const move = (position) => {
        let turn = gameControl.takeTurn()
        gameboardArray.splice(position, 1, turn)
        displayController.move(turn, position)
    }

    const checkArray = (position) => { return gameboardArray[position] }

    return {
        move,
        checkArray
    }
})()


const displayController = (() => {

    const move = (turn, position) => {
        let target = document.getElementById(position)
        target.textContent = turn
    }

    const reset = () => {
        for (let i = 0; i < 9; i++) {
            let target = document.getElementById(i)
            target.textContent = " "
        }
    }
    

    return {
        move,
        reset
    }
})()

//let game control be the actual changing of stuff

const gameControl = (() => {
    let turn = 0

    const takeTurn = () => {
        turn += 1

        if(turn % 2 == 0) {
            return "O"
        } else {
            return "X"
        }
    }

// following might work, might not

    const disableButton = (id) => {
        document.getElementById(id).disabled = true
    }

    const enableButton = (id) => {
        document.getElementById(id).disabled = false
    }

    return {
        takeTurn,
        disableButton,
        enableButton
    }
})()

// game is currently playable via game.move(position)
// next step is assigning this to buttons
// after that, winning logic