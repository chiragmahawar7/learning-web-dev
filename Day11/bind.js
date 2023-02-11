const studentOne = {
    name: "ABC",
    score: 80
};
function studentScore() {
    return `${this.name} scored ${this.score}.`
};
const result = studentScore.bind(studentOne);
console.log(result()); //prints ---> ABC scored 80.

// When bind is called a new function is created and stored inside of the variable result.
// This is stored with the context for this.
// It is only when we invoke this later inside of the console log that this function actually runs.
// binds simply returns a new function with the value of this set to what we pass in to the parameters.

// PASSING PARAMETERS TO BIND
function studentScore1(subject) {
    return `${this.name} scored ${this.score} in ${subject}.`
};
const result1 = studentScore1.bind(studentOne, "Chemistry");
console.log(result1());   // prints ---> ABC scored 80 in Chemistry.

// we can pass the argument when we call result
const result2 = studentScore1.bind(studentOne);
console.log(result2("Art")); // prints ---> ABC scored 80 in Art.