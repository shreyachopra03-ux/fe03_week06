// what is async ?
// async is a keyword used before a function to create a async function

// what is await ?

// how async await works behind the scenes ?
// async and await combo is used to handle promises.

// examples using async/await

// error handling

// interviews

// async await v/s promise .then/.catch
// async await is a syntactic sugar over promise .then/.catch
// async await is a more cleaner way of writing code, which actually makes sense, so prefer this.

// Async function "always returns a promise".
// If this fn doesn't return a promise then the value will automatically be wrapped inside a promsie, therefore returning a promise only at the end.

// How to handle using async/await ?
// 'await' keyword to be used in front of the promise that has to be resolved.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved value!!")
//     }, 20000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved value!!")
//     }, 40000)
// });


// await can only be used inside an async function.

// async function handlePromises() {
//     console.log("hello world!");
 
//     const val1 = await p1;
//     console.log("Namaste js 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste js 2");
//     console.log(val2);
// }
// handlePromises();


// Real world example of async/await
// fetch returns promises.

const API_URL = "https://api.github.com/users/shreyachopra03-ux";

// The fn call will suspend itself here because call stack should not be blocked and will only resume after the fetch call has been fulfilled (could either be resolved or rejected).
async function handlePromise() {

    try {
    // fetch() => response.json() => jsonValue
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    }
    catch(err) {
        console.log(err);
    }
}
handlePromise();





