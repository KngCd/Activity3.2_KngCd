/* SIMPLE COUNTER */

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color;
    do {
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    } while (color === '#FFFFFF')
    return color;
}

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const displayCount = document.getElementById("display");

let count = 0;

increaseBtn.onclick = function(){
    count ++;
    displayCount.textContent = count;
    displayCount.style.color = getRandomColor();
    displayCount.style.backgroundColor = getRandomColor();
}

decreaseBtn.onclick = function () {
    count --;
    displayCount.textContent = count;
    displayCount.style.color = getRandomColor();
    displayCount.style.backgroundColor = getRandomColor();
}

resetBtn.onclick = function () {
    count = 0;
    displayCount.textContent = count;
    displayCount.style.color = getRandomColor();
    displayCount.style.backgroundColor = "#FFFFFF";
}