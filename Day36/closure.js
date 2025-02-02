function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z); // 7

// Closure - function bundled with its lexical environment
// y function returned remembers its scope.
// so while returning whole closure was returned & put into z


// Uses of closure
// - Module design pattern
// - currying
// - functions like once
// - memoize
// - maintaining state in async
// - setTimeouts

// data encapsulation

function counter() {
    var count = 0;
    return function incrementCount() {
        count++;
        console.log(count);
    }
}
var counter1 = counter();
counter1(); // output - 1

var counter2 = counter();
counter2(); // output - 1 new copy of function

// this way, count is encapsulated inside and cannot be accessed from other part of code