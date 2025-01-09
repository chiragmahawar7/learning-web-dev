// let & const declarations are hoisted


console.log(b); // undefined
console.log(a); // ReferenceError - cannot access a before initialization
let a = 10;
var b = 100;

// a & b both are stored in memory before code execution begins.
// but let & const are stored in separate memory space.

// Temporal dead zone - time since when let & const are hoisted & till they are
// initialized a value
// when values are in temporal dead zone, they can't be accessed

// var is attached to window object however let & const are not atatched to window object.
