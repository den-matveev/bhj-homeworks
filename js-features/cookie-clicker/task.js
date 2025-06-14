const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
const cookieImage = document.getElementById('cookie');
const lastClick = Date.now();
let currentCount = 0;

const getAverageSecondClicks = () => {
    now = Date.now();
    diff = (now - lastClick) / 1000;
    return (1 / diff).toFixed(2);
};

cookieImage.onclick = () => {
    cookieImage.width = cookieImage.width === 200 ? 220 : 200;
    currentCount++;
    clickerCounter.textContent = currentCount;
    clickerSpeed.textContent = getAverageSecondClicks();
};