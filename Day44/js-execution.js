// JS Execution

// JavaScript Engine
// JavaScript was initially designed to run within web browsers.
// Each browser has a JavaScript engine
// This is software that lives within your web browser, and it’s responsible for executing our code.

// The Execution Journey

// 1. Parsing: First, the engine breaks down the code into tokens. Tokens are small units like keywords, operators, literals, and identifiers.
// Then, it parses the tokens to create an Abstract Syntax Tree (AST), which represents the grammatical structure of the code.

// 2. Compilation: Modern JavaScript engines like V8 (used in Chrome and Node.js) use a technique called Just-In-Time (JIT) compilation.
// This involves compiling JavaScript code into machine code at runtime.

// 3. Execution: This is when we see the effects of our code in the browser.
// Initially, the engine interprets the JavaScript code directly from the AST, 
// converting it into bytecode, which is then executed by the JavaScript Virtual Machine (JVM).
// The JIT compiler profiles the running code to identify “hot” code paths that are executed frequently.
// These paths are recompiled into highly optimized machine code for faster execution.

// 4. Garbage Collection: The engine performs memory management through garbage collection.
// It periodically scans for and cleans up unused or unreachable memory to free up resources.

// 5. Event Loop: Since JavaScript is single-threaded, it uses the event loop to manage the execution of asynchronous code. 
// It continuously checks the call stack, and the message queue processes events and executes callback functions when the call stack is empty.

