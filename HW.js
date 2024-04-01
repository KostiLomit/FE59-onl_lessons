// Задача 1.
// Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
// переданного в нее параметра. Если передадим число 100 то, надо вычислить
// сумму чисел от 0 до 100 (должно получится 5050).

// const newNuber = 50 ; 

// let result = (newNuber * (newNuber + 1)) / 2 ;

// console.log(result); 


function getSum(userNumberI) {

    return (userNumberI * (userNumberI + 1)) / 2;

} 

let userNumberS = prompt("Целове значение сюда");
let userNumberI = parseInt(userNumberS); 


alert(getSum(userNumberI));

