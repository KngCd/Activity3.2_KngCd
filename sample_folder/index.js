/* SIMPLE COUNTER */

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const displayCount = document.getElementById("display");

let count = 0;

increaseBtn.onclick = function(){
    count ++;
    displayCount.textContent = count;
}

decreaseBtn.onclick = function () {
    count --;
    displayCount.textContent = count;
};

resetBtn.onclick = function () {
    count = 0;
    displayCount.textContent = count;
}