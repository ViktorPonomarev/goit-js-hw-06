function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Находим элементы в HTML
const ref = {
  id: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
}
const btnBoxes = document.querySelector('#boxes'); //Получаем доступ к имеющимся

ref.btnCreate.addEventListener('click', onInputClick); //Добавляем на btn функкционал
function onInputClick(event) { // Ф-я, добавляем элементы при клике
  const newDiv = Number(ref.input.value);
  createBoxes(newDiv);
};

function createBoxes(amount) { //Созда'м колекцию єлементов
  const width = 30;
  const height = 30;
  let addValue = 0;

  const elements = []; //Масив элементов, на которы будем добавлять

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div'); //Создали новый div
    divEl.classList.add('box');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = width + addValue + 'px';
    divEl.style.height = height + addValue + 'px';
    addValue += 10; //Увеличиваем значение ширены/высоты эл. в цикле на + 10
    elements.push(divEl); //Добавляем элемент в масив
  }
  btnBoxes.append(...elements); //Добавили в HTML
};
ref.btnDestroy.addEventListener('click', destroyBoxes); //Добавляем на btn функционал

function destroyBoxes() {
  btnBoxes.innerHTML = "";
}
