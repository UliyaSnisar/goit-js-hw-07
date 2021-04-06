const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingridientListRef = document.querySelector('#ingredients');

const list = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;

  return li;
});

ingridientListRef.append(...list);
