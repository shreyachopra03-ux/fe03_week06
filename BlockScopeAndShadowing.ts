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

// Shadowing -> means the inner variable has shadowed the value of the outer variable

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
const c = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);  
    console.log(c);
}
console.log(c)