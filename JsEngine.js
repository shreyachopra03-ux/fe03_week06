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
// 3) Execution -> 

