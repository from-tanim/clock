let countdown;
let totalTime;

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalTime = minutes * 60 + seconds;
    updateTimerDisplay(totalTime);

    countdown = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdown);
            alert('Time is up!');
            return;
        }
        totalTime--;
        updateTimerDisplay(totalTime);
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    totalTime = 0;
    updateTimerDisplay(totalTime);
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('fullscreen').addEventListener('click', toggleFullscreen);
