// Rest Parameter
// Rest parameters help us to pass an infinite number of function arguments.

function print(a, b, ...remaining) {
    console.log(a); //1
    console.log(b); //2
    console.log(remaining); //[3,4,5,6]
}

print(1, 2, 3, 4, 5, 6);
// here we are using the rest operator to extract all the remaining values and put them in an array.

// Diff with spread operator
// spread op - we give or spread individual data of an array to another data.
// On the other hand, the rest parameter is used in a function or an array to get all
// the arguments or values and put them in an array or extract some pieces of them.

// If you see (…) dots on the function calls, then it is a spread operator.
// If you see (…) dots on the function parameter, then it is a rest parameter.