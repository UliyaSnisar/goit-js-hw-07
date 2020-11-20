let counterValue = 0;

function decrement() { 
    counterValue -= 1;

    render();
} 

function increment() { 
    counterValue += 1;
    
    render();
} 

function render() { 
    htmlValue.textContent = counterValue;
}

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const htmlValue = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(htmlValue);

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);