
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isRunning = false;

function updateTime() {
    if (seconds === 59) {
        seconds = 0;
        if (minutes === 59) {
            minutes = 0;
            hours++
        } else {
            minutes++;
        }
    } else {
        seconds++;
    }
    document.querySelector('span.time').innerHTML = `${hours} : ${minutes}: ${seconds}`;

}


function start() {
    if (isRunning === false) {
        timer = setInterval(updateTime, 1000)
        isRunning = true;
    }


}


function stop() {
    clearInterval(timer);
    isRunning = false;

}


function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector('span.time').innerHTML = `${hours} : ${minutes}: ${seconds}`;
    stop();

}