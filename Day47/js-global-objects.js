// Global objects are special tools that are available.
//  They help in common tasks, such as working with numbers, text, or even URLs, without needing to write extra code.

// 1.encodeURI() and encodeURIComponent()
// These two methods are used when working with URLs.
// Sometimes, URLs contain special characters that need to be safely included, like spaces or symbols.
// The encodeURI() method helps with encoding entire URLs,
// while encodeURIComponent() is used for encoding specific parts of a URL.
let encodedURL = encodeURI("https://example.com/page name");

// 2. decodeURIComponent()
// This method is the opposite of encodeURIComponent().
// It takes an encoded part of a URL and decodes it, making it readable again.
let decodedURL = decodeURIComponent("Hello%20World");

// 3. eval()
// The eval() method is used to execute a string of JavaScript code.
// However, it should be used carefully because it can run potentially unsafe code.
eval("console.log('Hello, World!')");

// 4. global This Property
// It provides a way to access the global object across different environments

// 5. window
// The object is the global object in the browser.
// It represents the browser window or tab and is automatically available in all JavaScript running in the browser.
// All global variables, functions, and objects are properties of the window object.
console.log(window.alert("Hello!")); // Opens an alert box


// The Essential Global Properties
// 1. Infinity
// represents a number greater than any other number.
// It’s useful when dealing with calculations that go beyond the normal range of numbers.
let bigNumber = 1 / 0; // OUTPUT: Infinity

// 2. Undefined vs. Undeclared
let x;
console.log(x); // undefined, BECAUSE x has no value
console.log(y); // Error BECAUSE y is undeclared