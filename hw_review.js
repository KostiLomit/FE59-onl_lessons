// 2,

// console.log(animals[animals.length - 1]);
// console.log(animals.at(-1));

// 3;

// const numbers = [5, 43, 63, 23, 90];
// numbers.splice(0, numbers.length)
// numbers.length = 0;
// console.log(numbers);

// for (let i = 0; i < numbers.length; ++i) {
//     delete numbers[i];
// }

// let numbers = [5, 43, 63, 23, 90];
// numbers = [];

// не очень так как вручную привязываемся к длине

// numbers.splice(0,5);

// 7;

// const binary = [0, 0, 0, 0];
// let result = "";
// for (let i = 0; i < binary.length; i++) {
//   if (i % 2 === 0) {
//     result += binary[i];
//   } else {
//     result += "1";
//     binary.push("0");
//   }
// }
// console.log(result);

// Более короткое решение

// console.log(binary.join("1"));

// не очень
// const binary = [0, 0, 0, 0]
// const strokBinary = (`0${1}0${1}0${1}0${1} `)
// console.log(typeof(strokBinary) )

// Продвинутый уровень
// Задание 1

// const palindrome = "мадам";
// const reverseWord = palindrome.split("").reverse().join("");
// if (palindrome === reverseWord) {
//   console.log(`${palindrome} - это палиндром`);
// } else {
//   console.log(`${palindrome} - это не палиндром`);
// }

// LVL UP 2

// const matrix = [
//   [12, 98, 78, 65, 23],
//   [54, 76, 98, 43, 65],
//   [13, 324, 65, 312],
//   [9092, 22, 45, 90000],
// ];

// let sum = 0;
// let count = 0;

// for (const array of matrix) {
//   for (const number of array) {
//     sum += number;
//     count++;
//   }
// }
