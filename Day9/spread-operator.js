// Spread Operator

// Allows an iterable such as an array expression or string to be expanded in places 
// where zero or more arguments (for function calls) or elements (for array literals) are expected,
// or an object expression to be expanded in places where zero or more key-value pairs 
// (for object literals) are expected.

const arr1 = [1, 3, 6, 7];
const arr2 = [5, arr1, 8, 9];
console.log(arr2); // [ 5, [ 1, 3, 6, 7 ], 8, 9 ]

// 1. to flatten this array
const arr3 = [5, ...arr1, 8, 9];
console.log(arr3); //[ 5, 1, 3, 6, 7, 8, 9 ]

// 2. Copying an array
const arr4 = [1, 2, 3];
const arr5 = arr4;
arr5.push(4); // updates both arrays
console.log(arr5); // [ 1, 2, 3, 4 ]
console.log(arr4); // [ 1, 2, 3, 4 ]

// use spread op
const arr6 = [1, 2, 3];
const arr7 = [...arr6];
arr7.push(4);
console.log(arr7); // [ 1, 2, 3, 4 ]
console.log(arr6); // [ 1, 2, 3]


function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let array2Copy = [...arr2];
    array2Copy.splice(n, 0, ...arr1);
    return array2Copy;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4,1,2,3,5,6]