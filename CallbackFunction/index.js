// What is a callback function in js?
// Callback Function is a function passed into another function as an argument
// Callback fn gives us the access to whole async world in a sync single threaded language

// ex
setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
}
x(function y(){
    console.log("y");
});
  
// Js is a synchronous and single threaded language.

// BLOCKING THE MAIN THREAD
// Everything inside js is executed through the call stack only and if any operation blocks this call stack then it's called blocking the main thread.

// POWER OF CALLBACK
// Callback fn's are always stored in heap memory and pushed into the call stack at the time of their occurence.

// DEEP ABOUUT EVENT LISTENERS
document.getElementById('btn')
.addEventListener("click", function xyn(){
    console.log("btn clicked");
});

// closures demo with Event Listeners
// O/p -> btn clicked 1, btn clicked 2 ...

function attachEventListeners(){
    let count = 0;
document.getElementById('btn')
.addEventListener("click", function xyn(){
    console.log("btn clicked");
})
};

// Scope Demo with Event Listeners

// GARBAGE COLLECTION AND removeEventListeners
// vvv imp interview ques -> why do we need to remove event listeners ?
// Removing event listeners prevents Memory Leaks by allowing the Garbage Collector to free up RAM. 
// It also stops Duplicate Execution, ensuring your logic doesn't run multiple times on a single click.
