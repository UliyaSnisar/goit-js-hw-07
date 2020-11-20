const input = document.querySelector('#validation-input');
console.log(input);

function changeInp() { 
    const length = input.getAttribute('data-length');

    addClass(input.value.length === Number(length) ? true : false);
}

function addClass(passed) { 
    if (passed) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else { 
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

input.addEventListener('blur', changeInp);