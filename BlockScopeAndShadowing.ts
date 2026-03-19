// Block is also known as Compound statement.
// We use multiple statements in a block together where js expects only 1 statement.
// For combining mutiple statements together, always use a block, multipe statements are used in loops, for loop etc..

if(true) {
    // Compound Statement
    var a = 10;
    console.log(a);
}

// Block scope -> what all variables and fn's can be accessed inside this block is the block scope.
// var is global scoped whereas let & const are block scoped, 
// which means var can be accessible even outside the block but let/const can't be accessed outside of their block & it will give reference error.

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(a)
console.log(b)
console.log(c)

// Shadowing -> Shadowing is when you give a variable in a local scope (like inside a function or { } block) the exact same name as a variable in an outer scope.
// The inner variable "hides" the outer one, so the code only sees the inner version until that block ends

// 1st example

var a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a) // 10 will be printed here as the inner variable a has shadowed the outer a's value & var is hoisted in global space

// 2nd example

let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);  // ans => 20 as it's in block scope
    console.log(c);
}
console.log(b) // ans => 100, a new memory space called 'script' is created where this b is hoisted

// 3rd example
// for const it's the same as let 

const c = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);  
    console.log(c);  // ans => 30
}
console.log(c) // ans => 100

// 4th example

const d = 100;
function y() {
    const d = 30;
    console.log(d);   // ans => 30
}
y();
console.log(d);  // ans > 100 

// illegal shadowing
let e = 20;
{
    var e = 20;
}

// legal shadowing
var a = 30;
{
    let a = 30;
}

// lexical scoping works inside a block as well.
// lexical means one inside the other.
// lexical scoping: A variable can be accessed from its own scope and any inner (nested) scopes, but not from outer scopes if it’s declared inside a block or function.
// lexical scope chain pattern is followed inside a block.
// Arrow fn also follows the same scope rules as other normal fn's.

const g = 20;
{
    const g = 100;
    {
        const g = 200;
        // console.log(g)   // ans => 200 
    }
    console.log(g)
}


// lexical scope chain : Current scope → Outer scope → Global scope