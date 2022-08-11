/*Задача 2
Напиши скрипт, который для каждого элемента 
массива ingredients:

Создаст отдельный элемент <li>. Обзательно 
используй метод document.createElement().
Добавит название ингредиента как его текстовое 
содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в 
список ul#ingredients. */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("ul");


// //!Vol- 1
// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const option = ingredients[i];


//   const titleEl = document.createElement("li");
// titleEl.classList.add("item");
//   titleEl.textContent = option;
  
//   elements.push(titleEl);
// }

// console.log(elements);
// ingredientsEl.append(...elements);

// ! Vol- 2
const elements = ingredients.map(option => {

  const titleEl = document.createElement("li");
titleEl.classList.add("item");
  titleEl.textContent = option;

  return titleEl;
});

console.log(elements);
ingredientsEl.append(...elements);

// // ! Vol- 3 Пишем функция для создания АйтемОптионс
// const makeItemOptions = options => { 
//   return options.map(option => {
//  const titleEl = document.createElement("li");
// titleEl.classList.add("item");
//   titleEl.textContent = option;

//   return titleEl;
//   });
// };
// const elements = makeItemOptions(itemOptions);
// itemOptions.append(...elements);

