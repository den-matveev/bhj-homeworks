const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
const cookieImage = document.getElementById('cookie');
const startTime = Date.now();
let currentCount = 0;

const getAverageSecondClicks = () => {
    return currentCount / ((Date.now() - startTime) / 1000).toFixed(2);
};

cookieImage.onclick = () => {
    cookieImage.width = cookieImage.width === 200 ? 220 : 200;
    currentCount++;
    clickerCounter.textContent = currentCount;
    clickerSpeed.textContent = getAverageSecondClicks();
};