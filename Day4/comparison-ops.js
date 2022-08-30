// == Double Equals Comparison Operator
//transforms the operands having the same type before comparison.
// So, when you compare string with a number, JavaScript converts any string to a number.
// An empty string is always converts to zero. A string with no numeric value is converts to 
// NaN (Not a Number), which returns false.

// === Triple Equals Comparison Operator
//strict equality comparison operator, which returns false for the values which are not of a similar type.

console.log(0 == false); //true
console.log(0 === false); //false

console.log("" == false); //true
console.log("" === false); //false

console.log("" == 0); //true
console.log("" === 0); //false

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(new String("foo") == "foo"); //true
console.log(new String("foo") === "foo"); //false