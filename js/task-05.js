const refs = {
    input: document.querySelector('#name-input'),
    text: document.querySelector('#name-output')
};
console.log(refs.input);
console.log(refs.text);

function changeInput(){
    refs.text.textContent = refs.input.value ? refs.input.value : 'незнакомец';
};

refs.input.addEventListener('keydown', changeInput);
