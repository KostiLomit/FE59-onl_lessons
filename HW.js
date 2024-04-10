// Задача 1.
// Дан массив:
// Выведите в консоль его длину

// const colors = ['red', 'green', 'blue'];

// console.log(colors.length);


// Задача 2.
// Дан массив:
// Выведите в консоль его последний элемент вне зависимости от его длинны

// const animals = ['monkey', 'dog', 'cat']; 

// console.log(animals[animals.length - 1]);
// console.log(animals.at(-1));


// Задача 3.
// Дан массив:
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами.

// const numbers = [5, 43, 63, 23, 90];

// delete numbers[0]; // не изменяет длину массива (undefind)
// numbers.splice(0, 5);
// const filtedNumbers = numbers.filter(function(){
//     return false;
// });

// console.log(filtedNumbers);


// Задача 4.
// Дан массив:
// Удалите последний элемент массива, затем вместо него добавьте в массив
// студента Borya .
// Удалите первый элемент массива, затем вместо него добавьте в массив
// студента Andrey .
// Полученный результат не забудьте вывести в консоль.

// const students = ['Polina', 'Dasha', 'Masha']; 

// students.splice(students.length - 1, 1, "Borya" );
// students.splice(0, 1, "Andrey");

// console.log(students); 


// Задача 5
// Дан массив:
// Выведите в консоль все элементы массива. Сначала через цикл for ,
// затем for..of
// const cats = ['Gachito', 'Tom', 'Batman']

// for( let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }

// for (let key in cats) {
//     console.log(cats[key]); 
// }

// Задача 6.

// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8

// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]
// const combination = evenNumbers.concat(oddNumbers);

// const index = combination.indexOf(8);
// console.log(index);

// console.log(combination);


// Задача 7.
// Дан массив:

// Массивы6Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

// const binary = [0, 0, 0, 0];
// let newBinary = [];

// for (let i = 0; i < binary.length; i++) {
//     newBinary.push(binary[i], 1);
// }

// newBinary.pop(); 

// const binaryS = newBinary.join(''); 
// console.log(binaryS); 
