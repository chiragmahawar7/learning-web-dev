// 10 Console Tips That Will Improve Your Debugging Skills
// There’s more to using console.log() to debug code

// 1. console.log()
var myName = 'terminator';
console.log('myName', myName); //used more often
// we can use shorthand notation as well!!
console.log({ myName });
// outputs the same thing!

// 2. console.log() multiple items
const student1 = { name: "A", rollNo: 123 };
const student2 = { name: "B", rollNo: 234 };
console.log(student1);
console.log(student2);
// too slow, tedious
//better way -
console.log({ student1, student2 });

// 3. console.table()
console.table({ student1, student2 });
//makes it more readable!!

// 4. Grouped logs
console.group('User Details');
console.log('name: Terminator');
console.log('position: Software Developer');
console.group('Account');
console.log('Member Type: Premium Member');
console.log('Member Since: 2020');
console.groupEnd();
console.groupEnd();
//nested group

// 5. console.warn()
console.warn('This feature will be deprecated in the next release');

// 6. console.error()
console.error('Your code is broken, go back and fix it!');

// 7. custom console styling
//Yess! css in logs - use %c directive
console.log('%c Hey,', 'color: white; background-color:#61dbfb', 'Have fun!');

// 8. find speed of your functions
let i = 0;
console.time("for loop");
for (i = 0; i < 1000000; i++) {
    //execution
};
console.timeEnd("for loop");
//speed here is not static. it depends on computer it is running on, other things at execution at that time etc.

// 9. console.trace()
function getName(person) {
    console.trace();
    return person.name;
}
function sayHi(person) {
    return `Hi ${getName(person)}`;
}
sayHi(student1);

// 10. console.assert()
function assert() {
    const a = -1;
    console.assert(a === -1, "a is not equal to -1");
    console.assert(a >= 0, "a is negative");
}
assert();
//if assertion fails, the console will print out the trace.