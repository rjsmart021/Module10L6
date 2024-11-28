let countdown;

function startTimer() {
    const duration = parseInt(document.getElementById('duration').value);
    let timeRemaining = duration;
    const timerDisplay = document.getElementById('timerDisplay');

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration in seconds.');
        return;
    }

    clearInterval(countdown);

    countdown = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Time\'s up!';
            showNotification('Timer has ended!');
        } else {
            timeRemaining--;
        }
    }, 1000);
}

function showNotification(message, delay = 0) {
    setTimeout(() => {
        alert(message);
    }, delay);
}

let notificationInterval;

function startRepeatNotification(message, interval = 5000) {
    notificationInterval = setInterval(() => {
        const userConfirmed = confirm(message);

        if (userConfirmed) {
            clearInterval(notificationInterval);
        }
    }, interval);
}

// Example usage:
// startRepeatNotification('This is a repeated notification. Click OK to stop.', 10000);
