/*Задание 5
Напиши скрипт который, при наборе текста в инпуте 
input#name-input 
(событие input), подставляет его текущее значение в 
span#name-output. 
Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please 
enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
 */

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', newInput);
 
function newInput(a) {
    console.log(a.currentTarget.value);
    span.textContent = a.currentTarget.value;

    if (a.currentTarget.value === "") {
        span.textContent = "Anonymous";
    }
}

// // ! Vol-2
// const inp = document.querySelector('#name-input');
// const title = document.querySelector('#name-output');
// inp.addEventListener('input', newInp);
// function newInp(a) {
//     title.textContent = a.currentTarget.value;

//     if (a.currentTarget.value === " ") {
//         title.textContent = "Anonymous"
//     }
// }
