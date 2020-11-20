const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

function cangeInput() { 
    text.textContent = input.value ? input.value : 'незнакомец';
}

input.addEventListener('keyup', cangeInput);
