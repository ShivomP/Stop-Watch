const millisTimer = document.querySelector(".timer__milliseconds")
const secondsTimer = document.querySelector(".timer__seconds")
const minutesTimer = document.querySelector(".timer__minutes")
const startButton = document.querySelector(".stopwatch__start")
const stopButton = document.querySelector(".stopwatch__stop")
const resetButton = document.querySelector(".stopwatch__reset")

let startTime
let cancelId
let savedTime = 0

function startTimer(){
    startButton.disabled = true
    stopButton.disabled = false
    resetButton.disabled = false
    startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer(){
    startButton.disabled = false
    stopButton.disabled = true
    resetButton.disabled = false
    savedTime += Date.now() - startTime
    cancelAnimationFrame(cancelId)
}

function resetTimer(){
    startTime = Date.now()
    savedTime = 0
    millisTimer.innerHTML = "000"
    secondsTimer.innerHTML = "00"
    minutesTimer.innerHTML = "00"
}

function updateTimer(){
    let millisElapsed = savedTime + Date.now() - startTime
    let secondsElapsed = millisElapsed / 1000
    let minutesElapsed = secondsElapsed / 60

    let millisText = millisElapsed % 1000
    let secondsText = Math.floor(secondsElapsed % 60)
    let minutesText = Math.floor(minutesElapsed)

    if(millisText.toString().length < 3){
        millisText = millisText.toString().padStart(3, "0")
    }
    if(secondsText.toString().length < 2){
        secondsText = secondsText.toString().padStart(2, "0")
    }
    if(minutesText.toString().length < 2){
        minutesText = minutesText.toString().padStart(2, "0")
    }

    millisTimer.innerHTML = millisText
    secondsTimer.innerHTML = secondsText
    minutesTimer.innerHTML = minutesText

    cancelId = requestAnimationFrame(updateTimer)
}