// Anonymous Function
// function that has no name or we can say which is without any name.
// it is declared without any identifier
let x = function () {
    console.log('It is an anonymous function');
};
x();

// USES-
// Passing an anonymous function to other function as its argument
setTimeout(function () {
    console.log('Execute later after 1 second')
}, 1000);

// Immediate execution of a function
(function () {
    console.log('Hello');
})();  