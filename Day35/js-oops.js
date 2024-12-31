// OOPS

// Classes and Objects
// Classes and objects are the building blocks of OOP

// - Classes: A class is a blueprint for creating objects. It defines the properties and methods 
// that the objects created from the class will have.
// - Objects: An object is an instance of a class. It contains actual values instead of variables 
// and methods to operate on these values.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }
}
const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.start(); // Output: Toyota Corolla is starting.
myCar.drive(); // Output: Toyota Corolla is driving.

// Inheritance
// Inheritance allows a class to inherit properties and methods from another class.
class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }
    displayBatteryLife() {
        console.log(`${this.make} ${this.model} has ${this.batteryLife}% battery life remaining.`);
    }
}
const myElectricCar = new ElectricCar('Tesla', 'Model S', 2022, 85);
myElectricCar.start(); // Output: Tesla Model S is starting.
myElectricCar.drive(); // Output: Tesla Model S is driving.
myElectricCar.displayBatteryLife(); // Output: Tesla Model S has 85% battery life remaining.

// 2. Encapsulation
// Encapsulation hides the internal state of an object and allows access through public methods.
class Car1 {
    #mileage = 0;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive(miles) {
        this.#mileage += miles;
        console.log(`${this.make} ${this.model} drove ${miles} miles. Total mileage: ${this.#mileage}`);
    }
}
const myCar1 = new Car1('Honda', 'Civic', 2019);
myCar1.drive(50); // Output: Honda Civic drove 50 miles. Total mileage: 50

// Explanation: The `#mileage` field in the `Car` class is private and cannot be accessed directly 
// from outside the class. The `drive` method interacts with this private field.

// Polymorphism
// Polymorphism allows objects of different classes to be treated as instances of a common superclass.
class Animal {
    makeSound() {
        console.log('Some generic animal sound');
    }
}
class Dog extends Animal {
    makeSound() {
        console.log('Bark');
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('Meow');
    }
}
const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound());
// Output:
// Some generic animal sound
// Bark
// Meow

// Abstraction
// Abstraction simplifies interaction with an object by hiding complex details.
class CoffeeMachine {
    #waterAmount = 0;
    setWaterAmount(amount) {
        if (amount < 0) throw new Error('Negative amount of water is not allowed');
        this.#waterAmount = amount;
    }
    getWaterAmount() {
        return this.#waterAmount;
    }
    brew() {
        console.log(`Brewing coffee with ${this.#waterAmount} ml of water`);
    }
}
const machine = new CoffeeMachine();
machine.setWaterAmount(500);
machine.brew(); // Output: Brewing coffee with 500 ml of water

// Explanation: The `CoffeeMachine` class abstracts the process of brewing coffee.
// The internal state (`#waterAmount`) is hidden, and only necessary methods (`setWaterAmount`, `brew`)
// are exposed.