// Reference Error vs Syntax Error vs Type Error

console.log(a); // Reference Error as a is not defined in scope
var b = 10;

/** --------------- */

// let z = 10;
// let z = 20;
// redeclaring a declared variable - syntax error
var b = 100;
var b = 10;
// with var its possible

/**
const b;
b= 10;
// syntax error as const varibale needs initialization
 */

const b = 10;
b = 100;
// line 22 will generate TypeError - assignment to const variable