const hmsToSeconds = (hmsString) => {
    const [h, m, s] = hmsString.split(":").map(Number);
    return h * 3600 + m * 60 + s;
};

const secondsToHMS = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const timer = document.getElementById("timer");
let currentSeconds = hmsToSeconds(timer.textContent);

let intervalId = setInterval(() => {
    currentSeconds--;

    timer.textContent = secondsToHMS(currentSeconds);
    if (currentSeconds === 0) {
        clearInterval(intervalId);
        timer.textContent = "00:00:00";
        const anchor = document.getElementById("visually-hidden");
        anchor.click();
    }
}, 1000);