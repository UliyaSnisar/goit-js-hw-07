const refs = {
    decrementBtn: document.querySelector('#counter button[data-action="decrement"]'),
    incrementBtn: document.querySelector('#counter button[data-action="increment"]'),
    htmlValue: document.querySelector('#value'),
};
console.log(refs.decrementBtn);
console.log(refs.incrementBtn);
console.log(refs.htmlValue);

let counterValue = 0;

function increment() { 
    counterValue += 1;
    
    render();
} 

function decrement() { 
    counterValue -= 1;

    render();
} 


function render() { 
    refs.htmlValue.textContent = counterValue;
}


refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);