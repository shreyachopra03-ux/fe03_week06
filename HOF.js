// HOF: HIGHER ORDER FUNCTIONS -> A fn which takes another fn as an argument or returns a fn from it.

// x is the callback function & y is HOF here.
function x(){
    console.log("hello");
}

function y(x){
    x();
}

// ex
//  How to write optimised code in interviews: 

const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

// polyfill for map function
Array.prototype.calculate = function(logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.map(area));

console.log(radius.calculate(area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
  