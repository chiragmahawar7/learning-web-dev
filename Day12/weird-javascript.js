// 1. sort()
const arr = [10000, 21, 1, 4, 30];
console.log(arr.sort()); //prints [1, 10000, 21, 30, 4]

// by default, js sort method sorts an array as strings
// it requires a comparison function to evaluate every pair
console.log(arr.sort((a, b) => a > b ? 1 : -1)); // prints [1, 4, 21, 30, 10000]

// 2. add/subtract
console.log('11' + 1); // prints 111
console.log('11' - 1); // prints 10

// while addition, first operand is type casted to string. '11' & '1' are concatenated to '111'
// while subtraction, first operand is type casted to number and then subtraction is performed bw 11 & 1
// to avoid such situations use toString() and parseInt()