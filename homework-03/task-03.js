const findBestEmployee = (employee) => {
  // Допустим max найбольшее значение

  let max = 0;
  let bestEmployee;

  const keys = Object.keys(employee);

  for (const key of keys) {
    if (employee[key] > max) {
      max = employee[key];
      bestEmployee = key;
    }
  }

  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
