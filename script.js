const game = (() => {

    const gameboardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    
    const move = (position) => {
        let target = document.getElementById(position)
        let turn = gameControl.takeTurn()

        gameboardArray.splice(position, 1, turn)
        displayController.move(turn, target)
        gameControl.disableButton(target)
    }

    const reset = () => {
        for (let i = 0; i < 9; i++) {
            gameboardArray.splice(i, 1, i)

            let target = document.getElementById(i)

            displayController.reset(target)
            gameControl.enableButton(target)
            gameControl.turnReset()
        }
    }

    const checkArray = (position) => { return gameboardArray[position] }

    return {
        move,
        reset,
        checkArray
    }
})()


const displayController = (() => {

    const move = (turn, target) => {
        target.textContent = turn
    }

    const reset = (target) => {
        target.textContent = " "
    }
    
    return {
        move,
        reset
    }
})()


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

    const turnReset = () => { turn = 0 }

    const disableButton = (target) => { target.disabled = true }

    const enableButton = (target) => { target.disabled = false }

    return {
        takeTurn,
        turnReset,
        disableButton,
        enableButton
    }
})()