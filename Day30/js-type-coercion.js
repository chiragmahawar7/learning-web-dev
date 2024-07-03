// three ways to convert a string value to number

console.log(+"21"); // 21
console.log(Number("21")); // 21
console.log(parseInt("21")); // 21

// Number() and Unary Plus(+) works exactly same

// 1. Number(x) does type coercion to number, while parseInt(x) does parsing.
// Number function will try to convert it to numerical value,
// if we pass any value that can not be converted into a valid numeric, number function will return NaN.

// Whereas, parseInt() parses the provided value, it tries to extract out the valid numeric 
// from the provided value, the valid number should be present in the starting of the string.

console.log(Number("75JS")); // NaN
console.log(parseInt("75JS")); // 75

console.log(Number([])); // becomes Number("")// 0
console.log(Number([4])); // becomes Number("4"); // 4
console.log(Number([4, 5])); // becomes Number("4,5"); //NaN


console.log(parseInt([])); // becomes parseInt("") NaN
console.log(parseInt([4])); // becomes parseInt("4") 4
console.log(parseInt([4, 5])); // becomes parseInt("4,5") valid part is 4. hence o/p is 4

// 2. Number works well with Scientific Numbers

console.log(Number("83e4")); // 830000
console.log(Number("2e2")); // 200

console.log(parseInt('4e3')); // 4


// 3. Empty, Nullish value handling is different
// Number constructor function will convert empty values null, false, "", [] to 0 and true to 1.

console.log(Number("")); // 0
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number([])); // 0
console.log(Number(true)); // 1
console.log(Number({})); // NaN

console.log(parseInt("")); // NaN
console.log(parseInt(null)); // NaN
console.log(parseInt(false)); // NaN
console.log(parseInt([])); // NaN
console.log(parseInt(true)); // NaN
console.log(parseInt(undefined)); // NaN
console.log(parseInt({})); // NaN

// 4. Number() can’t differentiate different Number System, but parseInt can with radix argument.

console.log(parseInt(10, 8)); // Octal conversion - output 8
console.log(parseInt(101, 2)); // Binary conversion - output 5

// if radix not provided -
// If the string starts with “0x”, the radix is 16 (hexadecimal)
// If the string starts with “0”, the radix is 8 (octal)
// If the string begins with any other value, the radix is 10 (decimal)

// Similarity
// They both ignore whitespace
const foo = "    6  ";
console.log(parseInt(foo)); // 6
console.log(Number(foo)); // 6