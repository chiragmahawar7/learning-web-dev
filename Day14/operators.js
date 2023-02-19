// 1. nullish coalescing operator
// The nullish coalescing operator (??) is a logical operator that returns 
// its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

console.log(false || 'test') // returns 'test'
console.log(false ?? 'test') // returns false

console.log(0 || 'test') // returns 'test'
console.log(null || 'test') // returns 'test'

console.log(null ?? 'test') // returns 'test'
console.log(undefined ?? 'test') // returns 'test'


// 2. Logical nullish assignment
// The logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).

let user = { name: "ABC_XYZ" };
user.twitter_name ??= "@ABC_XYZ"; // assigns '@ABC_XYZ'
console.log(user); // {name: "ABC_XYZ", twitter_name: "@ABC_XYZ"}


// 3. in operator
// The in operator returns true if the specified property is in the specified object or its prototype chain.

const userDetail = { email: 'anshuman@gmail.com' }
console.log('email' in userDetail)// return true
console.log('name' in userDetail) // return false


// 4. Optional chaining (?.)
// The ?. operator is like the . chaining operator,
// except that instead of causing an error if a reference is (null or undefined),
// the expression short-circuits with a return value of undefined.

let userDetail1 = { name: 'anshuman' }

// console.log(userDetail1.address.zipcode) ----> TypeError
console.log(userDetail1.addess?.zipcode) // returns undefined


