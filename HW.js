"use strict"; 
// Задача 1.
// Выведи все элементы массива в консоль с помощью метода forEach .
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// fibonacci.forEach(fib => {
//     console.log(fib); 
// });

// fibonacci.forEach(function (fib) {
//     console.log(fib);
// });

// Задача 2.
// Используя метод map создайте новый массив, на основе массива users , в
// котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ... etc] .
// Реализуйте решение двумя способами, используя function declaration & arrow
// function.

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// const StringUsers = users.map((string, index) => `Member ${index + 1}: ` + string);

// console.log(StringUsers);

// const StringUsers = users.map(function(string, index){
//     return `Member ${index + 1}: ` + string;
// })
// console.log(StringUsers);

// Задача 3.
// С помощью метода filter создайте новый массив в котором не будет
// отрицательных чисел.
// Реализуйте решение двумя способами, используя function declaration & arrow
// function.

// const numbers = [7, -4, 32, -90, 54, 32, -21, 0 ];

// const PositiveArray = numbers.filter(number => number >= 0);
// console.log(PositiveArray);

// const PositiveArray = numbers.filter(function(number) {
//     return number >=0; 
// })
// console.log(PositiveArray);

// Задача 4.
// Используя метод reduce получите сумму всех чисел массива.
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// const sum = fibonacci.reduce((accumulator, value) => accumulator + value);
// console.log(sum);

// const sum = fibonacci.reduce(function(accumulator, value){
//     return accumulator + value;
// })
// console.log(sum);

// Задача 5.
// Используя метод find найдите в массиве первое четное число.
// Реализуйте решение двумя способами, используя function declaration & arrow
// function.
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// const evenNumber = numbers.find(number => number % 2 === 0);
// console.log(evenNumber);

const evenNumber = numbers.find(function(number){
    return number % 2 === 0;
})
console.log(evenNumber);