// toString() usage

let num = 123;
let str = num.toString();
let str1 = num['toString'];


console.log(str); // prints 123
console.log(str.length); // prints 3
console.log(str1); // prints function
console.log(str1.length); // prints 1

// Ways to convert number to string

// 1. concat empty string
console.log(num + '');

// 2. template strings
console.log(`${num}`);

// 3. JSON.stringify
console.log(JSON.stringify(num));

// 4. toString()
console.log(num.toString());

// 5. String()
console.log(String(num));


console.log(1 + 2 + 3 + ''); // prints 6
console.log('' + 1 + 2 + 3); //prints 123