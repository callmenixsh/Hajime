// Show and hide sections
function showClock() {
    document.getElementById('clock').classList.add('active');
    document.getElementById('timer').classList.remove('active');
    document.getElementById('stopwatch').classList.remove('active');
}

function showTimer() {
    document.getElementById('timer').classList.add('active');
    document.getElementById('clock').classList.remove('active');
    document.getElementById('stopwatch').classList.remove('active');
}

function showStopwatch() {
    document.getElementById('stopwatch').classList.add('active');
    document.getElementById('clock').classList.remove('active');
    document.getElementById('timer').classList.remove('active');
}

// Digital Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Timer
let timerInterval;
function startTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    let totalTime = hours * 3600 + minutes * 60 + seconds;
    
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            totalTime--;
            let hrs = Math.floor(totalTime / 3600);
            let mins = Math.floor((totalTime % 3600) / 60);
            let secs = totalTime % 60;
            document.getElementById('timerDisplay').innerHTML = 
                `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timerDisplay').innerHTML = "00:00:00";
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    if (stopwatchInterval) return;
    
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        const hours = Math.floor(stopwatchTime / 3600);
        const minutes = Math.floor((stopwatchTime % 3600) / 60);
        const seconds = stopwatchTime % 60;
        document.getElementById('stopwatchDisplay').innerHTML = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').innerHTML = "00:00:00";
}
