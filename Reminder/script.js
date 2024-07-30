document.addEventListener('DOMContentLoaded', () => {
    const setReminderBtn = document.getElementById('setReminderBtn');
    const cancelReminderBtn = document.getElementById('cancelReminderBtn');
    const timeInput = document.getElementById('timeInput');
    const timeRemainingDiv = document.getElementById('timeRemaining');
    const alarmSound = document.getElementById('alarmSound');
    const reminderModal = document.getElementById('reminderModal');
    const okBtn = document.getElementById('okBtn');

    let reminderTimeout;
    let countdownInterval;

    function playSound() {
        alarmSound.loop = true;
        alarmSound.play();
    }

    function stopSound() {
        alarmSound.loop = false; 
        alarmSound.pause(); 
        alarmSound.currentTime = 0;
    }

    function showReminderModal() {
        reminderModal.style.display = 'block';
        playSound();
    }

    function hideReminderModal() {
        reminderModal.style.display = 'none';
        stopSound();
    }

    function setReminder() {
        const timeInMinutes = parseFloat(timeInput.value);
        if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
            alert("Please enter a valid number");
            return;
        }

        const timeInSeconds = timeInMinutes * 60;
        if (reminderTimeout) {
            clearTimeout(reminderTimeout);
            clearInterval(countdownInterval);
        }

        let remainingTime = timeInSeconds;
        timeRemainingDiv.textContent = `Time remaining: ${formatTime(remainingTime)}`;

        reminderTimeout = setTimeout(() => {
            showReminderModal();
        }, timeInSeconds * 1000);

        countdownInterval = setInterval(() => {
            remainingTime--;
            timeRemainingDiv.textContent = `Time remaining: ${formatTime(remainingTime)}`;
            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    setReminderBtn.addEventListener('click', setReminder);

    cancelReminderBtn.addEventListener('click', () => {
        clearTimeout(reminderTimeout);
        clearInterval(countdownInterval);
        timeRemainingDiv.textContent = "";
        stopSound();
    });

    okBtn.addEventListener('click', () => {
        hideReminderModal();
        setReminder();
    });
});
