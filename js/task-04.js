/*Задание 4
Счетчик состоит из спана и кнопок, которые, при клике, должны 
увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Создай переменную counterValue в которой будет храниться текущее 
значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или 
уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.
 */

const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    valueEl: document.querySelector('#value'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
};

refs.btnDecrement.addEventListener('click', onBtnDecrementClick);
refs.btnIncrement.addEventListener('click', onBtnIncrementClick);

let counterValue = 0;

function onBtnDecrementClick() {
    counterValue -= 1;
    console.log(counterValue);
    refs.valueEl.textContent = counterValue;
}

function onBtnIncrementClick() {
    counterValue += 1;
    console.log(counterValue);
    refs.valueEl.textContent = counterValue;
}
