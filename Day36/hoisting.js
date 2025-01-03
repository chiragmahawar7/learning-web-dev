getName(); // Hello world
console.log(x); // undefined

var x = 7;

function getName() {
    console.log("Hello world");
}

getName(); // Hello world
console.log(x); // 7
console.log(y); // RefrenceError - y is not defined

// Hoisting - phenomenon by which we can access variables & functions beofre they are initialized. (line 1,2)

// Diff bw not defined & undefined
// in above example, y is not defined. but in line 2, x is initialized but not defined yet

// above, if getName would be a arrow function, then line 1 would have thrown error as arrow function is treated
// as variable.