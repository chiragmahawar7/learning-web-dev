greetings();
var greetings = function() {
    console.log("first function");
};

greetings();
function greetings() {
    console.log("second function");
}
greetings();

/** Output
Second function
first function
first function

during memory allocation, greetings() function at line 7 is allocated space whereas var greetings is declared 
but its value is not defined yet.
when line 1 is executed, greetings is a function in scope so second function is printed.
after that line 2 overrides the hoisted declaration.
 */