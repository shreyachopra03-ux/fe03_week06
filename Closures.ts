// Closures -> fn along with its lexical environment bundled together forms a closure.
// A function remembers the variables of its outer (parent) scope, even after the parent function has finished executing.
// very imp interview topic

// ex
function x() {
    var  a = 7;
    function y(){
        console.log(a);  // ans = 7
    }
    y();
}
x();

// very good example of closure from interview pov
function n() {
    var  a = 7;

    function y(){
        console.log(a);  // ans = 7
    }
    return y;
}
var z = n();
console.log(z);
///.....thousands of lines of code
z(); // ans = 7

// corner cases
// A closure does not store the value of a variable at the time the function was created; it stores a reference (a link) to that variable in the memory.

function f(){
    var a = 7;
    function h(){
        console.log(a);
    }
    a = 100;
    return h;   
}
var p = f();
console.log(p);
p();   // 100 -> Since a was changed to 100 before the function f returned, the inner function h sees that updated value.

// 
function m(){
    var b = 900;
    function s(){
        var a = 7;
        function t(){
            console.log(a,b);  // 7 900
        }
        t();
    }
    s();
}
m();

// Uses Of Closures:
// - Module design patern
// - Currying
// - Functions like once
// - memoize
// - maintaining state in async world
// - setTimeouts
// - Iterators
// - and many more...