const categorysRef = document.querySelectorAll('li.item');
console.log(categorys);

console.log('Колличество категорий: ', categorysRef.length);


categorysRef.forEach(value => console.log(
`Категория: ${value.querySelector('h2').textContent},
Количество элементов: ${value.querySelectorAll('li').length}`,
  )); 