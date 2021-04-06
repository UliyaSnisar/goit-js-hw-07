const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgContainerRef = document.querySelector('#gallery');
console.log(imgContainerRef);

const listImg = images.map(({url, alt}) => {
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.insertAdjacentHTML('afterbegin', `<img src='${url}' alt='${alt}'>`);
  console.log(li);

  return li;
});

console.log(listImg);

imgContainerRef.append(...listImg);
