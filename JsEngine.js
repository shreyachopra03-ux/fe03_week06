// Js Runtine Environment is like a big container which has all the thing reqd. to run the js code.
// It has a JS engine, API'S, Event Loop, Callback queue, microtask queue.
// Js engine is the heart of the js runtime env.
// Browser can only execute the js code because it has js runtime env.

// Node.js is a cross-platform, open-source JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.
// It is built on Google Chrome's V8 JavaScript engine, which compiles JavaScript directly into native machine code for high performance.

// First js engine to be ever created -> SpiderMonkey

// Js engine isn't a machine.

// Js is an intrepeted as well as compiled language it just depends on the js engine being used.
// Nowadays, modern js engines use JIT Compilation also known as JUST-IN-TIME Compilation which uses both interpreter as well as compiler.

// Working of Js engine:
// CODE -> PARSING -> COMPILATION -> EXECUTION

// 1) Parsing stage =>  The code written by the developer is converted into tokens, these tokens are then given to the syntax parser and an AST ( abstract syntax tree ) is created.
// 2) Compilation ( JIT COMPILATION ) -> The AST generated goes to an interpreter that generates bytecode, then a compiler converts that bytecode into optimized machine code for max. performance during execution.
// 3) Execution -> consists of Garbage collector, memory heap, call stack. All the variables/functions are alloted memory in the memory heap. Garbage Collector frees up the unused variables/fn's from the memory by using mark and sweep algorithm.

// very imp terms: 
// 1) Mark and sweep alogrithm -> It starts from the Roots (Global variables/Stack) and Marks all reachable objects as 'active.' In the Sweep phase, it scans the memory and deletes any object that wasn't marked, effectively freeing up 'unreachable' memory.

// Js optimising techniques:
// 2) Inlining -> Inlining is an optimization where the compiler replaces a function call directly with the function's body code. This eliminates the overhead of jumping to a new memory address and setting up a new stack frame, making the execution faster.
// 3) Copy Elision -> Copy Elision is a compiler technique that eliminates unnecessary copying of objects. Instead of creating a temporary object and then copying it to its destination, the compiler constructs the object directly in the target memory location to save CPU cycles and RAM.
// 4) Inline Caching -> Inline Caching speeds up property lookups by remembering the results of previous searches. When the engine sees the same line of code again (like user.name), it skips the expensive search process and uses the "cached" memory offset from the last time it accessed that property.

// Google's v8 engine:
// 1) v8 uses 'ignition' interpreter & 'turbofan' compiler, it has a garbage collector 'orinoco'.


