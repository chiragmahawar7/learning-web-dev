// Javascript Array functions

// 1. forEach - The forEach() method calls a callback function once for each array element
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

// 2. map
// It is used to map the array data. It creates a new array and does not change the original array
// The returned array has the same length as the input array
const users = [
    { firstName: 'Abc', lastName: 'Def', age: 24 },
    { firstName: 'Pqr', lastName: 'Stu', age: 35 },
];
const mappedUser = users.map(user => {
    return { ...user, fullName: `${user.firstName} ${user.lastName}` }
});
console.log(mappedUser);

// 3. filter
// Used to filters the array based on the given condition. It also creates a new array and
// does not modify the original array.
// Return an empty array if array elements do not match with the given condition
const filteredUsers = users.filter(user => user.age < 30);
console.log(filteredUsers);

// 4. find 
// Behaves the same as a filter, but it only returns a single element
// It stops at the first element that “passes the condition” and returns that
// Returns undefined if the condition does not match with any element
const user = users.find(user => user.firstName === 'Abc');
console.log(user);

// 5. findIndex
// Similar to find() but returns index instead of element. Returns -1 If does not passes the test
const user1 = users.findIndex(user => user.lastName === 'Stu');
console.log(user1);

// 6. reduce
// The reduce() method runs a function on each array element to reduce it to a single value
// For each iteration, the return value of the callback passed on as an accumulator argument of the next iteration
// Takes initial value as a second argument (Optional)

const sumNumbers = numbers.reduce((sum, value) => sum += value, 0);
console.log(sumNumbers);

// 7. every
// Check if all array values pass a given condition. Returns true or false
const allOverThree = numbers.every(num => num > 3);
console.log(allOverThree);

// 8. some
// Check if some array values pass a condition. It returns true or false
const someOverThree = numbers.some(num => num > 3);
console.log(someOverThree);

// 9. indexOf
// Returns the index of an array element if passes the condition. Returns -1 otherwise
const position = numbers.indexOf(3);
console.log(position);

// 10. includes
// Used to check if an element is present in an array
// Returns true or false based on the presence of element in the array
console.log(numbers.includes(20));

// 11. Array.from
// Create an Array from a String
const arr = Array.from('ABCDEFG');
console.log(arr);

// 12. slice
// The Slice method takes 2 arguments. 
// 1st Argument: Specifies from where the selection should be started.
// 2nd Argument: Specifies at which level the endpoint should be. Default - return the elements from the starting index to the end of the array.
const arr1 = [1, 5, 8, 9];
console.log(arr1.slice(1, 3)); //[ 5, 8 ]

//If you put a negative number while calling, the selection will be selected from the end of the array.
console.log(arr1.slice(-2)); //[ 8, 9 ]
// slice returns the selected elements from the array. does not change the original array


// 13. splice
// 1st Argument: Specifies at which position a new element or existing element should be added/removed.
// If the value is negative the position will be counted from the end of the array.
// 2nd Argument: The numbers of elements to be removed from the starting position.
// If it is 0, then no elements will be removed.
// If it is not passed, it will delete all elements from the starting position.

console.log(arr1.splice(1, 2)); // [ 5, 8 ]
console.log(arr1); // [1,9]

// 3rd Argument ->nth Argument: The value of the items you want to add to the array.
const arr2 = [1, 5, 8, 9];
console.log(arr2.splice(1, 2, 'Hi', 'Chirag')); // [5,8]
console.log(arr2); // [1,'Hi','Chirag',9]

// Splice - returns removed elements & updates the original array

// 14. flat
// flattens a nested array into a single-level array
// @param depth — The maximum recursion depth

const nestedArray = [1, [2, [3, [4]]]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray);

// Output: [1, 2, 3, [4]]

// 15. flatMap
// first maps each element using a function and then flattens the result into a new array.

const numbersArr = [1, 2, 3];
const doubledAndFlattened = numbersArr.flatMap(num => [num * 2]);
console.log(doubledAndFlattened);

// Output: [2, 4, 6]

// 16. concat
// merges two or more arrays into a single array.

const array1 = ["Hello"];
const array2 = ["World"];
const combined = array1.concat(array2);
console.log(combined);