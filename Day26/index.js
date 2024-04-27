const arr = new Array(20);

arr.forEach(() => console.log('hi'));
arr.filter(() => console.log('hi'));
arr.map(() => console.log('hi'));

// these functions won't work. Because new Array() creates an array with a specified length
// but without any elements, so the indices is not created.
// and for the forEach, map etc callback is invoked only for indexes of the array which have assigned values.

// Solution-
// fill()
const arr1 = new Array(10).fill();

//spread operator
const arr2 = [...new Array(10)];

// Array.from()
const arr3 = Array.from(new Array(10));

arr3.forEach(() => console.log('hi'));
arr3.filter(() => console.log('hi'));
arr3.map(() => console.log('hi'));