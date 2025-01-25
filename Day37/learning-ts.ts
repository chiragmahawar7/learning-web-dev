// Typescript is just javascript but better
// it catches error early, before running the code

let userName: string = "John";
// userName = 42; // Error!

// Interface - define the structure of objects
interface User {
    id: number;
    name: string;
    email?: string; // Optional, so can skip.  
}

function printUser(user: User) {
    console.log(`ID: ${user.id}, Name: ${user.name}`);
}

// Generics - used for reusable code
// lets you work with any type without losing safety
function identity<T>(value: T): T {
    return value;
}

const text = identity<string>("Hello");
const number = identity<number>(42);

// Union Types - let variables have multiple types
let value: string | number;

value = "Hello"; // Okay  
value = 42;      // Okay too  
// value = true;    // Error! Only string or number allowed.


// How does TS helps with OOPS-
// supports classes, inheritance, access specifiers like private