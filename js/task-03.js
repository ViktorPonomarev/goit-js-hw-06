const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
    alt: 'Group of Horses Running',
  },
];

/*Задача 3
Напиши скрипт для создания галереи изображений по массиву данных. 
В HTML есть список ul.gallery.

<ul class="gallery"></ul>

Используй массив объектов images для создания элементов <img> вложенных 
в <li>. Для создания разметки используй шаблонные строки и метод 
insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через CSS 
классы. */

// ! Сразу решение
// const imgEl = document.querySelector(".images");
// const img = [...images];

// for (let el of images)
//   document
//     .querySelector(".gallery")
//     .insertAdjacentHTML(
//       "beforeEnd",
//       `<li><img src="${el.url}" alt="${el.alt}"></li>`
//   );

// console.log(img);

// ! Верное решение
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);


const listGallery = item => {
  return `<li>
    <img src="${item.url}" alt="${item.alt}"/>
  </li>`;

};

galleryEl.style.cssText = `
display: flex; 
flex-wrap: wrap; 
align-items: center;
justify-content:space-between;`

const markup = images.map(listGallery).join('');
console.log(markup);
galleryEl.insertAdjacentHTML('beforeend', markup);

