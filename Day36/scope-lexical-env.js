function a() {
    console.log(b);
}
var b = 10;
a();

// output - 10

function a() {
    c();
    function c() {
        console.log(b);
    }
}
var b = 10;
a();

// output - 10

// Scope
// scope means where you can access a specific variable/function on code

// Lexical Environment
// is created along with EC.
// local memory along with lexical env of its parent

//lexical - hierarchy
// c() is lexically sitting inside a() & a() is lexically inside global context 