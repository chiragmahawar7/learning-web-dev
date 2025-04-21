// JavaScript generators 
// powerful and flexible feature that enables you to pause and resume functions, providing exceptional control over code execution.
// Whether you’re dealing with asynchronous tasks, creating custom iterators, or generating sequences on the fly,
// generators can make your code more readable, efficient, and maintainable.

// A basic generator function looks like this:
function* exampleGenerator() {
    yield 'Hello';
    yield 'World';
}

const gen = exampleGenerator();

console.log(gen.next().value); // Output: "Hello"
console.log(gen.next().value); // Output: "World"
console.log(gen.next().value); // Output: undefined (no more yields

// USE CASES
// 1. Custom Iterators
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const numbers = range(1, 5);
console.log([...numbers]); // Output: [1, 2, 3, 4, 5]

// 2.  Infinite Sequence
// eg - Fibonacci
function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibGen = fibonacci();

console.log(fibGen.next().value); // Output: 1
console.log(fibGen.next().value); // Output: 1
console.log(fibGen.next().value); // Output: 2
console.log(fibGen.next().value); // Output: 3
console.log(fibGen.next().value); // Output: 5

// 3. Lazy Evaluation of Data
function* largeDataProcessor(data) {
    for (const item of data) {
        // Simulate a heavy computation
        yield processItem(item);
    }
}

function processItem(item) {
    // A placeholder function for heavy processing
    return `Processed ${item}`;
}

const data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
const processor = largeDataProcessor(data);

console.log(processor.next().value); // Output: "Processed Item 1"
console.log(processor.next().value); // Output: "Processed Item 2"
// And so on…