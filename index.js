let displayElem = document.querySelector('.box');
let counterPlusElem = document.querySelector('.countPlus');
let counterMinusElem = document.querySelector('.countMinus');

let quantity = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    quantity = quantity + 1;
    updateDisplay();
});

counterMinusElem.addEventListener("click",()=>{
    if (quantity > 0) {
        quantity = quantity - 1;
    }
    
    updateDisplay();
});

function updateDisplay(){
    displayElem.innerHTML = quantity;
};

