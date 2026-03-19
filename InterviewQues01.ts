// js doesnt stop for timers, it exceutes the rest of the code.
function x(){
    var i = 1;
    setTimeout(function() {
        console.log(i)
    }, 3000);
    console.log("namaste js")
}
x();
// o/p ->
//  namaste js
// 1 [executed after 3s]


//  vvvv imp ques 
function y(){
    for(var i = 1; i <=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste js");
}
y(); 
// o/p
// 6
// 6
// 6
// 6
// 6

// Fix of the above problem
function s(){
    for(let i = 1; i <=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste js");
}
s(); 
// o/p
// 1
// 2
// 3
// 4
// 5

// But if have to fix the above problem using var only
function p() {
    for(var i = 1; i<=5; i++) {
        function close(p:number): void{
            setTimeout(function() {
                console.log(p);
            }, p * 1000);
        }
        close(i);
    }
    console.log("Namaste js");
}
p();

// use of double parantheses in js: call a function, then immediately call what it returns.

// Example of data privacy using closures: 
function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();

// Fn constructor in js
function Counter(this: any){
    var count = 0;

    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}

// Disdadvanages of closures
// - Memory usage
// - Performance impact
// - Hard to debug
// - Code complexity
// - Delayed garbage collection

// Garbage collector in js: mechanism in JS that automatically frees memory by removing variables/objects that are no longer used.

// Relation between garbage collection, memory leaks and closures
function a() {
    var x = 0;
    return function m(){
        console.log(x);
    }
}

var m = a();
//.......

y();

// example of smart garbage collection by v8 js engine in chrome
// Here there's no use of p so it's smart garbage collection
// Smart garbage collection is when the JavaScript engine automatically removes unused variables from memory, even within closures, and keeps only those variables that are actually being used or referenced.

function z(){
    var x = 0, p = 10;
    return function n(){
        console.log(x)
    }
}

var q = z();
//.....

q();