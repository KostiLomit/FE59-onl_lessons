"use strict";

// //1-st task
// const stringTrue = "true";
// const isTheSkyIsGreen = false;
// const foreverYoung = 17;
// let missingData ;
// let user = null; //typeoff null возвращает object

// const result = [stringTrue , isTheSkyIsGreen , foreverYoung , missingData , user]; //создали масситв который содержит наши переменные 

// result.forEach((result) => console.log(typeof result)); //метод .forEach перебирает массив, и для кажжого элемента выводим его тип используя .typeof result

// //2-nd task 
// const height = 15;
// const width = 20; 

// if (height < width) {
//     console.log(width);
// } else if (width > height) {
//     console.log(height);
// } else {
//     console.log("значения равны");
// }

// //3-rd task
// for (let i = 1; i <= 20; ++i) {
//     if (i%3==0)
//     console.log(i);
// }

// //4-task
//     const key = true;
//     const documents = true; 
//     const pen = true; 
//     const apple = false; 
//     const orange = true; 

//     const shouldGoToWork = key && documents && pen && (apple || orange);

//     console.log(shouldGoToWork);// Мы можем идти на работу :(

// //5-task
//     let yourNumber = prompt("введите Целое число: "); // просим ввести число

//     let number = parseInt(yourNumber); //конвертируем значение в число для проверочек

//     // хотелось бы проверку на целое число и на пустое поле тоже :D
    
//     if (!isNaN (number) && yourNumber.trim() !== "") {

//         if (number%3 == 0 && number%5 ==0){ 
//             alert ("FizBuz");
            
//         }
//          else if (number%3 == 0) {
//             alert ("Fiz");
//         }
//          else if (number%5 == 0) {
//             alert ("Buz");
//         }
//     } 
//      else {
//         alert ("Давай серьезно, только целое число !");
//     }

//6-task
    let yourAge = prompt("Ваш возраст: " + "\nтолько целые числа\n"); // перенос строки в promt

    let numberAge = parseInt(yourAge);

    if (!isNaN(numberAge) && yourAge.trim() !== "") {

        if (numberAge > 16 && numberAge <18) {
            alert ("Можешь выкурить сигаретку, только маме не говори");
        }
        
        else if (numberAge >= 18) {
            alert ("Попей пивка");
        }

        else if (numberAge < 18) {
            alert ("Пей колу");
        }
    }

    else {
        alert ("Давай серьезно, только целое число !");
     }

     