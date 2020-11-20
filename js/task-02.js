const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');

const li1 = document.createElement('li');
li1.textContent = 'Картошка';

const li2 = document.createElement('li');
li2.textContent = 'Грибы';

const li3 = document.createElement('li');
li3.textContent = 'Чеснок';

const li4 = document.createElement('li');
li4.textContent = 'Помидоры';

const li5 = document.createElement('li');
li5.textContent = 'Зелень';

const li6 = document.createElement('li');
li6.textContent = 'Приправы';

ulRef.append(li1, li2, li3, li4, li5, li6);

console.log(ulRef);


