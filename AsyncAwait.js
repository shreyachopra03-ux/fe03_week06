// what is async ?
// async is a keyword used before a function to create a async function

// what is await ?

// how async await works behind the scenes ?

// examples of using async/await

// error handling

// interviews

// async await vs promise .then/.catch

// Async function "always returns a promise".
// If this fn doesn't return a promise then the value will automatically be wrapped inside a promsie, therefore returning a promise only at the end.

// How to handle using async/await ?
// 'await' keyword to be used in front of the promise

const p = new Promise((resolve, reject) => {
    resolve("Promise resolved value!!")
});

// function getData() {
//     p.then((res) => console.log(res));
// }

// getData();

// async and await combo is used to handle promises.

 