const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent === "10") {
            alert('Победа!');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent === "5") {
            alert('Поражение!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
}