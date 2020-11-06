"use strict";

const ERROR_WRONG_COUNTRY = "В вашей стране доставка не доступна";
const PRINT_COUNTRY_MESSAGE =
  "Введите страну куда собираетесь доставить товар.";
const ERROR_CANCEL = "Отменено пользователем!";

const inputedCountryName = prompt(PRINT_COUNTRY_MESSAGE);
let credits;

if (inputedCountryName === null) {
  alert(ERROR_CANCEL);
} else {
  const countryLowerCase =
    inputedCountryName[0].toUpperCase() +
    inputedCountryName.slice(1).toLowerCase();

  switch (countryLowerCase) {
    case "Китай":
      credits = 100;
      break;
    case "Чили":
      credits = 250;
      break;
    case "Австралия":
      credits = 170;
      break;
    case "Индия":
      credits = 80;
      break;
    case "Ямайка":
      credits = 120;
      break;

    default:
      alert(ERROR_WRONG_COUNTRY);
  }

  if (credits > 0) {
    alert(
      `Доставка в [${countryLowerCase}] будет стоить [${credits}] кредитов`
    );
  }
}
