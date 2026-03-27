"use strict";

// this in global space
// value of this in global space -> is a global object which can be window or any other depending upon where this piece of code is being run in which js environment.

// console.log(this);  // global object window

// this inside a function

function x() {
    // the value depends on strict / non stict mode
    console.log(this);
};
x();

// this works differently in strict and non strict mode

// this inside non-strict mode - (this substitution)
// If the value of this keyword is undefined/ null , this will be replaced with global object only in non strict mode.

// this keyword value depends on 'how the function is called' (window)

x(); // undefined
window.x(); // window 

// this inside a object's method
// value of this is obj

const obj = {
    a: 10, 
    x: function () {
        console.log(this);
        console.log(this.a);
    },
};
obj.x();


// call, apply, bind methods (sharing methods) -> very imp interview ques

// call method
const student = {
    name: "shreya",
    printName: function () {
        console.log(this.name);
    }
};

student.printName();

const student2 = {
    name: "manan"
}

student.printName.call(student2);

// this inside arrow function
// arrow functions don't provide their own 'this' binding, it retains the 'this' value of its enclosing lexical context.

const obj5 = {
    a: 10,
    x: () => {
        console.log(this);  // window object 
    },
};
obj5.x();

// this inside nested arrow functions

const obj6 = {
    a: 34,
    x: function() {
        // enclosing lexical context
        const y = () => {
            console.log(this);  
        };
        y();
    },
};
obj6.x();

// this keyword inside DOM elements -> reference to HTMLelement


