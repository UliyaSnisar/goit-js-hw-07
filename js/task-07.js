const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};
console.log(refs.input);
console.log(refs.text);

function changeSize(){
  refs.text.style.fontSize = `${refs.input.value}px`;
};

changeSize();

refs.input.addEventListener('input', changeSize)


// function changeSize() {
//   text.style.fontSize = `${input.value}px`;
// }

// changeSize();

// input.addEventListener('input', changeSize);