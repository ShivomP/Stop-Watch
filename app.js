const timerMillis = document.querySelector(".timer__milliseconds")
const timerSeconds = document.querySelector(".timer__seconds")
const timerMinutes = document.querySelector(".timer__minutes")

let startTime
let cancelId
let savedTime = 0

function startTimer(){
    startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer(){
    savedTime = savedTime + Date.now() - startTime
    cancelAnimationFrame(cancelId)
}

function resetTimer(){
    savedTime = 0
    startTime = Date.now()
    timerMillis.innerHTML = "000"
    timerSeconds.innerHTML = "00"
    timerMinutes.innerHTML = "00"
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
    
    timerMillis.innerHTML = millisText
    timerSeconds.innerHTML = secondsText
    timerMinutes.innerHTML = minutesText

    cancelId = requestAnimationFrame(updateTimer)
}