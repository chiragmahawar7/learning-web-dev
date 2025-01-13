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