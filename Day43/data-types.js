// In JavaScript,
// data types are classified into two main categories — Primitive Types and Reference Types

// 1. Primitive Types
// basic data types that hold simple, immutable values directly in memory
// Here are the six primitive types-

// Number: Holds numeric values, such as 5 or 3.14.
// String: Represents text, enclosed in single or double quotes, like "hello" or 'world'.
// Boolean: Represents logical values, either true or false.
// Null: Represents an intentional absence of any object value. It’s a way of saying, “This value is empty on purpose.”
// Undefined: Denotes a variable that has been declared but has not yet been assigned a value.
// Symbol: Unique and immutable identifiers, useful for creating hidden or globally unique object properties.
// BigInt: Allows you to represent integers larger than the maximum value supported by Number.

let age = 30;             // Number
let greeting = "Hello";    // String
let isActive = true;       // Boolean
let user = null;           // Null
let value;                 // Undefined
let uniqueId = Symbol();   // Symbol
let bigNumber = 9007199254740991n; // BigInt

// 2. Reference types
// store references (or memory addresses) to complex objects rather than directly storing values.

// Object: A collection of key-value pairs, like { name: "Alice", age: 30 }
// Array: An ordered list of values, such as [1, 2, 3]
// Function: A callable object that can be executed.


// DIFFERENCES
// 1. Assignment
//Primitive Types: When you assign a primitive value to a variable, a copy of the value is created and stored in the variable’s memory location.
// This means that each variable holding a primitive has its own copy of the value.

let x = 5;
let y = x; // y gets a copy of the value 5

y = 10; // Changing y doesn’t affect x
console.log(x); // Output: 5
console.log(y); // Output: 10

// Reference Types: When you assign an object to a variable, the variable stores a reference (memory address) to that object. This means that multiple variables can reference the same object,
// and changing the object through one variable affects all references to it.

let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 now references the same object as obj1

obj2.name = "Bob"; // Modifying the object through obj2 affects obj1 as well
console.log(obj1.name); // Output: "Bob"
console.log(obj2.name); // Output: "Bob"

// 2. Passing to Functions
// Primitive Types: When you pass a primitive value to a function, the function receives a copy of the value.
// Therefore, any changes made within the function do not affect the original variable.

function changeValue(num) {
    num = 10;
}

let myNumber = 5;
changeValue(myNumber);
console.log(myNumber); // Output: 5 (unchanged)

// Reference Types: When you pass an object to a function, the function receives a copy of the reference,
// not the object itself. Therefore, changes made to the object within the function affect the original object.

function changeName(person) {
    person.name = "Bob";
}

let myPerson = { name: "Alice" };
changeName(myPerson);
console.log(myPerson.name); // Output: "Bob" (changed)