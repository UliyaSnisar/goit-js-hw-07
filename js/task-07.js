const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeSize() {
  text.style.fontSize = `${input.value}px`;
}

changeSize();

input.addEventListener('input', changeSize);