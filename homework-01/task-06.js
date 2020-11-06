"use strict";

let input;
let total = 0;

const ERROR_MESSAGE = "Было введено не число, попробуйте еще раз";

do {
  input = prompt("Enter your number!");
  if (!isNaN(input)) {
    total += Number(input);
    console.log(total);
  } else {
    total = 0;
    alert(ERROR_MESSAGE);
  }
} while (input !== null);

alert(`Общая сумма чисел равна [${total}]`);
