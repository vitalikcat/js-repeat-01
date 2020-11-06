"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const ERROR_MESSAGE = "Отменено пользователем!";

const enteredInput = prompt(
  "Сколько дроидов хотите купить и записать число в переменную?"
);

if (enteredInput === null) {
  console.log(ERROR_MESSAGE);
  alert(ERROR_MESSAGE);
} else {
  totalPrice = Number(enteredInput) * pricePerDroid;
  console.log("totalPrice: ", totalPrice);

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    const balance = credits - totalPrice;
    console.log(
      `Вы купили [${enteredInput}] дроидов, на счету осталось [${balance}] кредитов.`
    );
  }
}
