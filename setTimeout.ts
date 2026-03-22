// Js Concurrency Model
// JavaScript follows a single-threaded, non-blocking concurrency model.
// It uses the event loop to manage asynchronous tasks by moving callbacks from the queue to the call stack when it’s empty.
// This allows JavaScript to handle multiple operations efficiently without running multiple threads.

// VERY IMP INTERVIEW QUES
// Why we have trust issues wiht setTimeout() ? 

console.log("start");

setTimeout(function (){
    console.log("callback");;
}, 5000)

console.log("end");

// millions of lines of code

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("while loop expires");

// ANOTHER IMP EX- setTimeout(0)
// o/p -> start end hi
// even if the time here is '0 ms' but setTimeout still has to go through all those steps, the setTimoeut will be registered
// to the web API'S , then the callback will be pushed into the callback queue, event loop will check when the call stack is empty then only setTimeout will be allowed to enter the call stack.

console.log("start");

setTimeout(function() {
    console.log("hi");
}, 0);

console.log("end");
