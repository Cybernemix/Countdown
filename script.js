const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Set the target date in Los Angeles time for March 8, 2024 at midnight
const targetDate = new Date("March 8, 2024 00:00:00 GMT-0800");

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;

    if (diff <= 0) {
        clearInterval(interval); // Stop the countdown when the target date is reached
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

const interval = setInterval(updateCountdown, 1000);
