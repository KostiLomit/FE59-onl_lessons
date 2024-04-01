// Задача 1.
// Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
// переданного в нее параметра. Если передадим число 100 то, надо вычислить
// сумму чисел от 0 до 100 (должно получится 5050).

// const newNuber = 50 ; 

// let result = (newNuber * (newNuber + 1)) / 2 ;

// console.log(result); 


// function getSum(userNumberI) {

//     return (userNumberI * (userNumberI + 1)) / 2;

// } 

// const userNumberS = prompt("Целове значение сюда");
// const userNumberI = parseInt(userNumberS); 

// if (isNaN(userNumberI)) {
//     alert("Вы ввели не число. Пожалуйста, введите целое число.");
// } else{
//     alert(getSum(userNumberI));
// }


// Задача 2.
// Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не
// увеличивается.


// function credit(creditSumF, creditRate, creditYear) {

//     return (creditSumF * creditRate) * creditYear;

// }

// const creditSumS = prompt("Введите желаемую сумму в таком формате: xxx.xx");
// const creditSumF = parseFloat(creditSumS); 
// const creditRate = 0.17;
// const creditYear = 5;

// if (isNaN(creditSumF)) {
//     alert("Вы ввели не число. Пожалуйста, введите число в таком формате: xxx.xx");
// } else {
//     alert("Переплата по кредиту = " + credit(creditSumF, creditRate, creditYear).toFixed(2) +  " eur");
// }

// Задача 3.
// Написать функцию trimString , которая в качестве аргумента принимает три
// параметра:
// строку
// значение «от»
// значение «по»
// После вызова функция должна вернуть переданную строку, обрезанную по
// значениям «от» и «по»

function trimString(str, ind1N, ind2N) {
 return str.slice(ind1N, ind2N);
 
}

const str = prompt("ВВедите ваше строку");
const ind1 = prompt("Первый индекс");
const ind1N = parseInt(ind1);
const ind2 = prompt("Второй индекс");
const ind2N = parseInt(ind2);

alert("Получилось слово: " + trimString(str, ind1N, ind2N));




// Задача 4.
// Написать функцию getSumNumbers . Она будет принимать число и вычислять
// сумму цифр, из которых состоит число. Для 2021 это будет 5.

// function getSumNumbers (userNumberI) {
    
//     let sum = 0;

    

//     for ( let i = 0; i < userNumberI.length; i++) {
//         sum += +userNumberI[i];
//     }

//     return sum;
// }

// const userNumberI = prompt("введите целое число: ");

// alert("сумма всех чисел : " + getSumNumbers (userNumberI));