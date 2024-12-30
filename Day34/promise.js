// Promise
// a promise is an object simply which represents the completion or failure of an asynchronous operation


// before promises, callbacks were used.
// A callback is a function you pass as an argument to another function, allowing it to be called later.
// If the callback runs before the main function finishes, it’s synchronous (blocking).
// If it runs after the main function finishes, it’s asynchronous (non-blocking).

// Callback was good but, had some serious problems as the codebase grew larger and larger.

// Callback Hell : Callbacks can lead to deeply nested and hard-to-read code when you have 
// multiple asynchronous operations dependent on each other.

// Error Handling : In callbacks, error handling can become complicated since each callback 
// needs its own error-handling logic.

// Composability and Chaining : Callbacks don’t provide a straightforward way to sequence multiple
// asynchronous operations, especially if one depends on the result of the previous.

// Avoiding Inversion of Control : With callbacks, control over what happens next is handed over 
// to the callback function, making it harder to manage the flow.

console.log("Starting the promise");

const aRandomPromise = new Promise((resolve, reject) => {
setTimeout(() => {
  console.log("buffering completed");
  reject("promise failed");
}, 30000);
})
.then((data) => {
  console.log("this is data", data);
})
.catch((error) => {
console.log("unexpected error occured : ", error)
});

console.log("Promise created:", aRandomPromise);

// Output - 
// Starting the promise
// Promise created: Promise { <pending> }
// buffering completed
// unexpected error occured : promise failed

// .then is just like hey if execution of the upper task is completed then please do this.

// .catch just catches the error ( you can use this for centralized error handling )

// .finally ( if everything got completed, please do this too. )

Promise.all() 
// It helps us in doing a list of things in parallel
// But it only returns when all the requests are successful, or if any of the requests fail,
// then it returns the reject method, ignoring the successful requests too.

Promise.allSettled()
// works the same but returns all the requests as successful even if one of them fails.

Promise.any()
// it returns one of the requests which gets completed the first and ignores all the other ones.
// but, in case if every promise fails. then it returns an aggregate error stating the reasons of all of them.

Promise.race()
// It is just like a lot of promises are racing and fastest one will won the race.
// similarly, it only returns the first promise that won the race.