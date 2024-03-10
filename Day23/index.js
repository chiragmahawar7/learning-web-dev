// JS Object
// One of JS Data type. used to store keyed collections and more complex entities.

// JS static methods

// 1. Object.seal()
// use Object.seal() method to prevent adding or removing properties in the object.

const person = {
    name: 'ABC',
    age: 25
};
Object.seal(person);
person.profession = "Developer";
console.log(person);
person.name = "DEF";
console.log(person);

// 2. Object.freeze()
// use Object.freeze() method to prevent any changes to an object, including adding, modifying or deleting properties.

const person1 = {
    name: 'John',
    age: 25
};
Object.freeze(person1);
person1.name = "Mark";
console.log(person1);
person1.profession = "Developer";
console.log(person1);

// 3. Objest.assign()
// copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget === target);

// 4. Object.create()
// Creates a new object with the specified prototype object and properties.
const person3 = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person3);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person3"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction();

// 5. Object.entries()
// Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

// 6. Object.hasOwn()
// Returns true if the specified object has the indicated property as its own property, or false if the property is inherited or does not exist.
const object1 = {
    prop: 'exists',
};

console.log(Object.hasOwn(object1, 'prop')); // Expected output: true
console.log(Object.hasOwn(object1, 'toString')); // Expected output: false
