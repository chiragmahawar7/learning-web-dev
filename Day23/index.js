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
