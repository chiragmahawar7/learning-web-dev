// 1. trim()
// It removes white space on both sides. 
let str = "   Hello World   ";
console.log(str.trim()); // "Hello World"

// 2. trimStart()
// It removes white space from the beginning
console.log(str.trimStart()); // "Hello World   "

// 3. trimEnd()
// It removes white space from the end
console.log(str.trimEnd()); // "   Hello World"

// 4. split()
// The split() method converts a string into an array splitting by string provided.
let str1 = "This is a test string";
console.log(str1.split(" ")); // ['This', 'is', 'a', 'test', 'string']

// 5. slice()
// The slice() method extracts a portion of a string and returns it as a new string.
// It takes two parameters: a starting point and an ending point.
// However, if you leave out the second one, it will cut the remaining string. 
// In the case of a negative value, a parameter's position is calculated from the end of the string.
console.log(str1.slice(6)); // "s a test string"

// 6. length
// The length property returns the length of the string.
console.log(str1.length); // 21

// 7. substring()
// The substr() method extracts part of a string and returns it in a new string.
// Although it is similar to the slice() method, the only difference is that the second parameter
// in this method specifies the length of the extracted part.
console.log(str1.substring(0, 4)); //This

// 8. concat()
// The contact() method is used to add or join two or more strings.
// It can also be used in place of the plus operator.
let test1 = "JS";
let test2 = "is fun!";
console.log(test1.concat(" ", test2)); // "JS is fun!"

// 9. charAt()
// The charAt() method returns the character at a specified index in a string.
console.log(test1.charAt(1)); //S

// 10. repeat()
// The repeat() method repeats a string a specified number of times.
console.log(test1.repeat(3)); // "JSJSJS"

// 11. indexOf()
// The indexOf() method returns the index of the first occurrence of a substring.
console.log(str1.indexOf('is')); //2

// 12. replace()
// The replace() method replaces strings with new values in a string.
console.log(test2.replace("fun", "awesome"));

// 13. includes()
// The includes() method checks if the string contains the substring.
// If the string contains the specified value, it returns true; otherwise, it returns false.
console.log(test2.includes("is")); //true

// 14. endsWith()
// The endsWith() method determines whether a string ends at the value that is specified.
// If the answer is yes, it returns true; otherwise, it returns false.
let str2 = "JS is fun!";
console.log(str2.endsWith("is")); //false

// 15. startsWith()
// The startsWith() checks if a string starts with a specified value.
console.log(str2.startsWith("JS")); //true

// 16. toLowerCase()
// The toLowerCase() method converts a string to lower case
console.log(str2.toLowerCase()); // "js is fun!"

// 17. toUpperCase()
// The toUpperCase() method capitalizes the entire string.
console.log(str2.toUpperCase()); // "JS IS FUN!"