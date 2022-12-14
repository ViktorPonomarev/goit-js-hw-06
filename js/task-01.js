/*Задача 1
Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories,
 то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и 
выведет в консоль текст заголовка элемента (тега <h2>) и
 количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 */

const headerEl = document.querySelectorAll(".item");
console.log("headerEl", headerEl);
console.log("Number of categories:", headerEl.length);


headerEl.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
    
});


// console.log(headerEl.textContent);

// const firstHeaderEl = headerEl.firstElementChild;
// console.log(firstHeaderEl);
// console.log(headerEl.children);
// console.log(headerEl.lastElementChild);

// console.log(headerEl.nextElementSibling);
// console.log(headerEl.nextSibling);
// console.log(headerEl.previousElementSibling);
// console.log(headerEl.previousSibling);
// console.log(headerEl.firstElementChild);
// console.log(headerEl.parentNode);
// console.log(headerEl.childNodes);
