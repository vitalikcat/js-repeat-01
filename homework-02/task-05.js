"use strict";

const checkForSpam = (message) => {
  // твой код
  const SPAMWORD = "spam";
  const SALEWORD = "sale";

  const messageToLowerCase = message.toLowerCase();

  const isSpamWordExist = messageToLowerCase.includes(SPAMWORD);
  const isSaleWordExist = messageToLowerCase.includes(SALEWORD);

  if (isSpamWordExist || isSaleWordExist) {
    return true;
  } else {
    return false;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
