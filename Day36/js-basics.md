## Javascript
- synchronous single-threaded language
- everything in JS happens inside an execution context.

### Execution Context
contains 2 components
1. Memory component- where all variables & functions are stored as key value pairs.
aka variable environment

2. code component - where code is executed line by line.
aka thread of execution

### Global execution context
as soon as JS code is run, Global execution context(GEC) is created with 2 components - memory & code.

### call stack
JS Engine manages a call stack to handle execution context, creation, deletion & control.
at the bottom of this stack, GEC resides. ie whenever JS code is executed, call stack is populated with GEC.
and whenever a fucntion is invoked, a new execution context is created and is pushed in the call stack.
once function is exectued, its execution context is popped out of stack & control goes back to GEC.

once whole code is executed, GEC is also removed from call stack.

"call stack maintains the order of execution of execution contexts"

call stack is also known as
- execution context stack
- program stack
- control stack
- runtime stack
- machine stack