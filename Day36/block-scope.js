// Block
// block is used to combine multiple JS statements into a group.
// group in order to use these statements in a place where JS expects only 1 statement.

// Block scope - variables & functions accessible inside a block.

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

console.log(a); //10
console.log(b); // Reference Error
console.log(c);

// b & c are reserved seperate memory space assigned for that block
// a is in global scope.

var x = 100;
{
    var x = 10;
    console.log(x); // 10
}
console.log(x); // 10

// Shadowing - x variable shadows the x declared outside the block

// Illegal Shadowing
let a = 20;
{
    var a = 20; // Syntax Error
}

// shadow is allowed uisng let for a let

var a = 20;
{
    let a = 10; // valid
}