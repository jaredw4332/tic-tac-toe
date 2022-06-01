const game = (() => {

    const gameboardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    
    const move = (position) => {
        let target = document.getElementById(position)
        let turn = gameControl.takeTurn()

        gameboardArray.splice(position, 1, turn)
        displayController.move(turn, target)
        gameControl.disableButton(target)
        gameControl.checkWin(gameboardArray)
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

    const checkWin = (array) => {
        console.log(array.toString())
        xWin = "X,X,X"
        oWin = "O,O,O"
        if (array == xWin || array == oWin){
            return "end"
        }
    }

    return {
        move,
        reset,
        checkArray,
        checkWin
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

    const winConditions = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

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

    const checkWin = (array) => {
        for (let i = 0; i < winConditions.length; i++){
        let winArray = winConditions[i].map(x=>array[x])
        let x = game.checkWin(winArray)
        if (x == "end") {
            return
        }
        }
    }

    return {
        takeTurn,
        turnReset,
        disableButton,
        enableButton,
        checkWin
    }
})()