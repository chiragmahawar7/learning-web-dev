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