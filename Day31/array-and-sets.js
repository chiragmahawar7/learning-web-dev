// Understanding Array and Set

// 1. Ordering
// Array: Maintains the order of elements based on their indices.
// Set: Does not guarantee any specific order of elements.

const arrayExample = [3, 1, 2];
console.log(arrayExample); // [3, 1, 2]

const setExample = new Set([3, 1, 2]);
console.log(setExample); // Set {3, 1, 2}

// 2. Uniqueness
// Array: Can contain duplicate values.
// Set: Only stores unique values; duplicates are automatically eliminated.

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(Array.from(new Set(arrayWithDuplicates))); // [1, 2, 3, 4, 5]

// 3. Accessing Elements
// Array: Access elements by index (`array[index]`)
// Set: No direct indexing; values are accessed using iteration or conversion to an array

const arrayExample1 = [1, 2, 3];
console.log(arrayExample1[1]); // 2
// Set
const setExample1 = new Set([1, 2, 3]); // No direct indexing, use iteration or conversion to array

// 4. Size Property
// Array: Has a `length` property indicating the number of elements
// Set: Has a `size` property instead of `length`.

console.log(arrayExample.length);
console.log(setExample.size);

// 5. Mutability
// Array: Mutable; elements can be added, removed, or modified.
// Set: Mutable, but values are added or removed using specific methods (`add`, `delete`, `clear`).

arrayExample.push(4); // Modifying the array
setExample.add(4); // Modifying the set

// 6. Iterating
// Array: Can be iterated using methods like `forEach` or loops.
// Set: Can be iterated using `forEach` or a `for…of` loop.

arrayExample.forEach(value => console.log(value));
setExample.forEach(value => console.log(value));

// 7. Removing Elements
// Array: Uses methods like `pop`, `shift`, or `splice` to remove elements.
// Set: Uses the `delete` method to remove specific values.

arrayExample.pop(); // Removes the last element
setExample.delete(2); // Removes the value 2

// 8. Checking Element Existence
// Array: Uses methods like `indexOf` or `includes` to check if an element exists
// Set: Uses the `has` method to check if a value exists.

console.log(arrayExample.includes(2)); // true

console.log(setExample.has(2)); // true

// 9. Union, Intersection, and Difference
// Array: Requires custom code to perform union, intersection, and difference operations
// Set: Has built-in methods (`union`, `intersection`, and `difference`) for these operations

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const union = new Set([...set1, ...set2]);
const intersection = new Set([...set1].filter(x => set2.has(x)));
const difference = new Set([...set1].filter(x => !set2.has(x)));

// Performance
// Array: Generally faster for index-based access and iteration
// Set: Faster for membership tests and eliminating duplicates.