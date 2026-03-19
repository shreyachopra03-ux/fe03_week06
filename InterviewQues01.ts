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
        function close(p) {
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