//MEMORY LEAKS
// ACCIDENTAL GLOBAL VARIABLE

function crazy() {
    var a = (b = 10);
    console.log(a); //prints 10
    console.log(b); //prints 10
}

crazy();
console.log("b", typeof b === "undefined");
console.log(b);
console.log("a", typeof a === "undefined");  // Output - a true
console.log(a); //ReferenceError

// b is an accidental global variable here.
// When a undeclared variable is referenced, javascript creates a new variable in the global Object.
