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
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// const evenNumber = numbers.find(number => number % 2 === 0);
// console.log(evenNumber);

// const evenNumber = numbers.find(function(number){
//     return number % 2 === 0;
// })
// console.log(evenNumber);

//LVL-UP 
// Задача 1.
// Написать функцию конструктор Student
// В каждом объекте студента должны быть поля salary , rate , name
// Внутри объекта также должен быть метод который на основе рейтинга
// возвращает сумму возможного кредита.
// На основе функции создать минимум 5 студентов и имя каждого студента
// должно соответствовать имени студента из вашей группы.
// Создать массив students и поместить в него студентов.
// Написать функцию, которая принимает массив студентов. И вычисляет
// общую сумму кредитов которую можно выдать группе.
// rate имеет 4 категории A B C D:
// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит 

function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;
    
    this.checkRate = function(){
        if(this.rate === "A") {
            return this.salary * 12;
        } else if(this.rate === "B") {
            return this.salary * 9; 
        }else if(this.rate === "C") {
            return this.salary * 6;
        } else {
            return 0;
        }
            
    };
}
const students = [];

const studentVictoria = new Student("Victoria", 5000,"C");
const studentKirill = new Student("Kirill", 2000,"A");
const studentVlad = new Student("Vlad", 1000,"B");
const studentIza = new Student("Izabella", 6000,"D");
const studentKsyusha = new Student("Ksenia", 5000,"B");

students.push(studentVictoria, studentKirill, studentVlad, studentIza, studentKsyusha);


const CreditSum = students.reduce((total, Student) => total + Student.checkRate(), 0); // разобраться почему без "0" футкция возвращает строку
    

console.log("Total possible credits: " + CreditSum);
    



