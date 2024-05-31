"use strict";

let inputMin = document.querySelector('.timer-input-min');
let inputSec = document.querySelector('.timer-input-sec');
let timerClockMin = document.querySelector('.timer-min');
let timerClockSec = document.querySelector('.timer-sec');
const startBtn = document.querySelector('.timer-start');
const stopBtn = document.querySelector('.timer-pause');

let timerInterval;
let totalSec = 0;
    
    inputMin.addEventListener('input', () => {
        timerClockMin.textContent = String(inputMin.value).padStart(2,'0');
    
});
    inputSec.addEventListener('input', () => {
        timerClockSec.textContent = String(inputSec.value).padStart(2,'0');

});


function startTimer() {
    let minutes = parseInt(inputMin.value) || 0;
    let seconds = parseInt(inputSec.value) || 0;
    totalSec = minutes * 60 + seconds;

    timerInterval = setInterval(() => {
        if (totalSec > 0) {
            totalSec--;

            let displayMinutes = Math.floor(totalSec / 60);
            let displaySeconds = totalSec % 60;

            timerClockMin.textContent = String(displayMinutes).padStart(2,'0');
            timerClockSec.textContent = String(displaySeconds).padStart(2,'0');

        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function stopTimer() {

    clearInterval(timerInterval)
}


startBtn.addEventListener('click', () => {
    startTimer();
})

stopBtn.addEventListener('click', () => {
    stopTimer();
})