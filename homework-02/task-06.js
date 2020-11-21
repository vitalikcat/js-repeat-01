// let input;
// const numbers = [];
// let total = 0;

// const PROMPT_MESSAGE = "Введите число.";

// while (input !== null) {
//   input = prompt(PROMPT_MESSAGE);
//   const inputToNumber = Number(input);

//   numbers.push(inputToNumber);
//   console.log(numbers);
// }

// if (numbers.length) {
//   for (let index = 0; index < numbers.length; index += 1) {
//     total += numbers[index];
//   }
// }

// const TOTAL_SUM_MESSAGE = `Общая сумма чисел равна [${total}]`;
// console.log(TOTAL_SUM_MESSAGE);

let input;
const numbers = [];
let total = 0;

const ENTER_MESSAGE = "Введите пожалуйста несколько чисел: ";

while (input !== null) {
  input = prompt(ENTER_MESSAGE);
  const stringToNumber = Number(input);
  numbers.push(stringToNumber);
}

if (numbers.length) {
  for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }
}

const TOTAL_SUM_MESSAGE = `Общая сумма чисел равна [${total}]`;

console.log(TOTAL_SUM_MESSAGE);
