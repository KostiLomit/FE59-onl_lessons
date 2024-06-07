"use strict";
///homework///


class Developer {
    constructor(name) {
        this.name = name;
    }
    startWork() {
        return `${this.name} start work`
    }
    endWork() {
        return `${this.name} end work`
    }
}

class Frontend extends Developer {
    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName; 
    }
    
    buildWebSite() {
        return `${this.name} start build website ${this.websiteName}`
    }
}

class Backend extends Developer {
    constructor(name) {
        super(name); 
    }
    
    buildServer() {
        return `${this.name} start build server`
    }
}

const alice = new Frontend('Alice', 'Amazon');
console.log(alice.startWork());
console.log(alice.endWork());
console.log(alice.buildWebSite());

const bob = new Backend('Bob');
console.log(bob.startWork());
console.log(bob.endWork());
console.log(bob.buildServer());



// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     describe(){
//         return `this car is a ${this.year} ${this.make} ${this.model} `
//     }
// };

// class ElectricCar extends Car {
//     constructor(make, model, year, batteryLife) {
//         super(make, model, year);
//         this.batteryLife = batteryLife;
//     }

//     batteryStatus() {
//         return `Your battery is ${this.batteryLife}% charged.`;
//     }
// }

// const myCar = new Car ('VW', 'Golf', '1991');
// console.log(myCar.desctibe());

// const myElectricCar = new ElectricCar ('Tesla','Model X','2025','90');
// console.log(myElectricCar.describe());
// console.log(myElectricCar.batteryStatus());


// class Animal {
//     constructor(name, age) {
//         this.name = name; 
//         this.age = age;
//     }

//     describe() {
//         return `Your animal is ${this.age} years old and its name is ${this.name}.`
//     }

// }

// class Dog extends Animal {
//     constructor (name, age, breed) {
//         super(name, age)
//         this.breed = breed; 
//     }
//     bark() {
//         return "GAV GAV GAV"
//     }
// }

// const valter = new Dog('Valter', '22', 'Taksa'); 
// console.log(valter.describe());
// console.log(valter.bark());