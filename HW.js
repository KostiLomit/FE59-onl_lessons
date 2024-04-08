"use strict" ;

// Объекты можно создавать с помощью фигурных скобок {}, 
// внутри которых указываются пары ключ-значение:

// let person = {
//     name: "Alex",
//     age: 30
// };

// Доступ к свойствам объекта можно получить с помощью точечной нотации . или скобочной нотации []:

// console.log(person.name);
// console.log(person["age"]);

// Методы объекта
// Методы — это функции, ассоциированные с объектом. Они могут использоваться для определения поведения объекта. 
// this ссылается на текущий объект, что позволяет получить доступ к его свойствам и методам :

// let person = {
//     name: "Alex",
//     presentation: function(){
//         console.log("Hello my name is " + this.name);
//     }
// Можно добавлять и удалять свойства объекта динамически:

// person.lastName = "Ivanov";
// delete person.age;

// Перебор свойств объекта
// Для перебора всех свойств объекта часто используется цикл for...in:

// for( let key in person) {    !!!!!!!!!!!!!!!!!!!!!!!!!!! БЕЗ КЛЮЧЕВОГО СЛОВА ПЕРЕМЕННАЯ БУДЕТ ГЛОБАЛЬНОЙ !!!!!!!!!!!!!!!!!!!!
//     console.log(key + ": " + person[key]); 
// }


// Задача 1.
// Создать любой объект с двумя ключами и любыми значениями в них, а затем
// удалить ключи из объекта

// const car = {
//     numberofDoors: 3,
//     cabrio: "yes",
// }

// delete car.numberofDoors;
// delete car.cabrio;

// console.log(car);

// Задача 2
// Создать любой объект с двумя ключами и любыми значениями в них, а затем
// проверить есть ли в объекте определенный ключ и если есть вывести в
// консоль true

// const car = {
//     numberofDoors: 3,
//     cabrio: "yes",
// }

// if("numberofDoors" in car){
//     console.log(true);
// }

// Задача 3.
// C помощью цикла for..in вывести в консоль сначала все ключи, потом
// значения ключей объект.

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true,
//     }

// for( let key in student ) {
//     console.log(key);
// }

// for( let key in student ) {
//     console.log(student[key]);
// }

// Задача 4.
// Дан объект:
// Вывести в консоль слово красный и синий

// const colors = {
//     'ru pum pu ru rum': {
//     red: 'красный',
//     green: 'зеленый',
//     blue: 'синий'
//     },
//     }

//     console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue );
