// MAP, FILTER, REDUCE ALL THESE ARE HOF'S.

// ++++++ MAP FUNCTION +++++++
// ALL THE BELOW 3 SYNTAXES ARE PERFECTLY VALID SYNTAXES.

const arr = [5, 1, 3, 2, 6];

// Double = [10, 2, 6, 4, 12]

const Double = arr.map((d) => d * 2);
// console.log(Double);

// Triple = [15, 3, 9, 6, 18]

function triple(x){
    return x * 3;
};

const output = arr.map(triple);
// console.log(output);

// Binary = ["101", "1", "11", "10", "110"]

const op = arr.map(function binary(x){
    return x.toString(2);
});
// console.log(op);

// ++++ FILTER FUNCTION ++++++

const arry = [5, 1, 3, 2, 6];

// filter odd values
const odd = arry.filter((o) => o % 2 == 1);
// console.log(odd);

// filter even values

const even = arry.filter(function even(x) {
    return x % 2 == 1
});
// console.log(even);

// +++++++ Reduce Function ++++++ 
const hi = [5, 1, 3, 2, 6];

//
const opps = hi.reduce(function (acc, curr) {
    return acc = acc + curr;
}, 0);
// console.log(opps);

// 
const oii = hi.reduce((acc, curr) => acc = acc + curr);
// console.log(oii);

// 
function hello(acc, curr) {
    return acc = acc + curr;
};

const opp = hi.reduce(hello);
// console.log(opp);

// return largest no. from the 'hi' array

const largest = hi.reduce((acc, curr) => curr > acc ? curr : acc)
// console.log(largest);

// Count frequency of elements

const elements = ["a","b","a","c","b","a"];
// {a: 3, b: 2, c: 1}

const freqEl = elements.reduce(function (acc, curr) {
    if(acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});

console.log(freqEl);

