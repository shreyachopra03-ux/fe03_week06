// Promises are used to handle async operations in js.
 
const cart = ["shoes", "lipgloss", "skirts"];

// Callbacks
// Here, we are passing a function.

createOrder(cart, function (orderId) {
    processToPayment(orderId);
});

// Promises
// Here, we are attaching a function.

const promise = createOrder(cart);

promise.then(function (orderId) {
    processToPayment(orderId);
}); 

// IMPORTANCE OF PROMISES
// -> Improved readability and maintainability
// -> Solving callback hell
// -> standardized error handling
// -> Better Control over Multiple Async Operations

// Promises Object In Browser
// fetch returns a promise.
// Promises have 2 things: PromiseState & PromiseResult.
// PromiseState -> It tells in which state the promise is currently, initially it's in pending state only.
// PromiseResult -> It gives the data that the fetch will get, unless the data has come the value of this remains undefined.
// There can only be 3 states inside promises: Pending, Fulfilled and Rejected.
// Promise objects are immutable.

const GITHUB_API = " https://api.github.com/users/shreyachopra03-ux"

const user = fetch(GITHUB_API);
