//null
// A null value represents a reference that points, generally intentionally, 
// to a nonexistent or invalid object or address.Even though it points to something non existing, 
// nothing, it’s a global object (and one of JavaScript’s primitive values).

console.log(typeof null); // object
//IMPORTANT
console.log(!null) //true
console.log(null == false) //false
console.log(null == true) //false

// in math operations null is converted to 0
console.log(null + 5); //5


//undefined
// one of JavaScript's primitive types.
// It basically tells us that something isn’t defined.
var a;
console.log(a); //undefined
console.log(typeof undefined); //undefined
//IMPORTANT
console.log(!undefined) //true
console.log(undefined == false) //false
console.log(undefined == true) //false
// in math operations, results is NaN always
console.log(undefined + 5); //5

// NULL v/s UNDEFINED
// 1. null represents “nothing”, fully non existing. undefined something which isn’t defined.
// 2. undefined has its own data type (undefined), null is only an object.
// 3. null is treated as 0 in basic arithmetic operations, undefined returns NaN

console.log(undefined == null); //true - "not comparing data types"
console.log(undefined === null); //false - "strict check data types as well"
console.log(!undefined === !null); //true - "both values negates returns true"


//NaN (Not a number)
// JavaScript returns this value when number we’re supposed to get isn’t a number.
console.log("tomato" - 10); //NaN

//though while adding anything to string, JS automatically converts second element of addition into string as well.
console.log(2000 + "miles"); //2000miles

//when you’re operating with numbers and booleans. Booleans are converted into ones and zeros.
// True = 1. False = 0.
console.log(true + 10); //11
console.log(false * 11); //0

// IMPORTANT
//NaN is actually a number
console.log(typeof NaN); //number

console.log(NaN == NaN); //false
console.log(NaN === NaN); //false

// to check if any argument is number - use isNaN()
let notANumber = "string" - 5;
let isANumber = 7;
console.log(isNaN(notANumber)); //true
console.log(isNaN(isANumber)); //false
