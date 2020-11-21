"use strict";

const findLongestWord = (string) => {
  // твой код
  // 1. Сделать из строки, массив слов.
  // 2. Записываем в переменную первое слово массива с которым будем сравнивать остальные.
  // 3. Пройтись по каждому слову с помощью метода for
  // 4. Поставить условие, если длинна перебираемого слова больше первого слова вернуть это слово.

  const arrayOfWords = string.split(" ");
  let longestWord = arrayOfWords[0];

  for (const word of arrayOfWords) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
