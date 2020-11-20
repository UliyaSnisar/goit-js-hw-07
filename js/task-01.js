
console.log('Колличество категорий: ', document.querySelectorAll('li.item').length);

document.querySelectorAll('li.item').forEach(value => console.log(
`Категория: ${value.querySelector('h2').textContent},
Количество элементов: ${value.querySelectorAll('li').length}`,
  )); 