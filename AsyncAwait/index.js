// what is async ?
// async is a keyword used before a function to create a async function

// what is await ?

// how async await works behind the scenes ?
// async and await combo is used to handle promises.

// examples of using async/await

// error handling

// interviews

// async await vs promise .then/.catch

// Async function "always returns a promise".
// If this fn doesn't return a promise then the value will automatically be wrapped inside a promsie, therefore returning a promise only at the end.

// How to handle using async/await ?
// 'await' keyword to be used in front of the promise that has to be resolved.

const p = new Promise((resolve, reject) => {
    setTimoeut(() => {
        resolve("Promise resolved value!!")
    }, 10000)
});

// await can only be used inside an async function.
async function handlePromises() {
    console.log("hello world!");
    // JS Engine was waiting for promise to be resolved
    const val1 = await p;
    console.log("Namaste js 1");
    console.log(val1);

    const val2 = await p;
    console.log("Namaste js 2");
    console.log(val2);
}
handlePromises();

// function getData() {
    // JS Engine will not wait for promise to be resolved
//     p.then((res) => console.log(res));

//     console.log("Namaste js");
// }

// getData();

