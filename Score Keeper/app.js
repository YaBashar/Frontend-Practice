
const playerOneBtn = document.querySelector(".one")
const playerTwoBtn = document.querySelector(".two")
const playerTwoScore = document.querySelector(".PlayerTwo")
const playerOneScore = document.querySelector(".PlayerOne")
const reset = document.querySelector(".reset")
const dropDown = document.getElementById("scores")


dropDown.addEventListener("change", () => {
    console.log("Change")
    const finalScore = dropDown.value
    sessionStorage.setItem("finalScore", finalScore)
    resetGame()
})


function playerOneClick () {
    let currentScore = parseInt(playerOneScore.innerText)
    const finalScore = parseInt(sessionStorage.getItem("finalScore"))

    currentScore += 1

    if (currentScore === finalScore) {
        playerOneBtn.removeEventListener("click", playerOneClick)
        playerTwoBtn.removeEventListener("click", playerTwoClick)
        playerTwoScore.style.color = "red"
        playerOneScore.style.color = "green"
    }
    playerOneScore.innerText = currentScore
}


function playerTwoClick() {
    let currentScore = parseInt(playerTwoScore.innerText)
    const finalScore = parseInt(localStorage.getItem("finalScore"))

    currentScore += 1
    if (currentScore === finalScore) {
        playerOneBtn.removeEventListener("click", playerTwoClick)
        playerTwoBtn.removeEventListener("click", playerTwoClick)
        playerOneScore.style.color = "red"
        playerTwoScore.style.color = "green"
       
    }
    playerTwoScore.innerText = currentScore
}

playerOneBtn.addEventListener("click", playerOneClick)
playerTwoBtn.addEventListener("click", playerTwoClick)


function resetGame() {
    playerOneScore.innerText = 0
    playerTwoScore.innerText = 0

    playerOneBtn.addEventListener("click", playerOneClick)
    playerTwoBtn.addEventListener("click", playerTwoClick)

    playerTwoScore.style.color = "black"
    playerOneScore.style.color = "black"
}

reset.addEventListener("click", resetGame)