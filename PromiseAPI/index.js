// PROMISE API'S -> very important topic from interview pov
// Promise.allSettled is the safest option among all the other Promise API's.

// Dummy promises

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 SUCCESS"), 3000);
    setTimeout(() => reject("P1 rejected"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 SUCCESS"), 1000);
    setTimeout(() => reject("P2 REJECTED"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 SUCCESS"), 2000);
    setTimeout(() => reject("P3 rejected"), 2000);
});

Promise.all([p1, p2, p3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
});

// Promise.allSettled will only return the results when all are promises are settled.
// It will return array of objects.

Promise.allSettled([p1, p2, p3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
});

// The o/p will be the 1st settled promise could be either fulfilled or rejected doesn't matters.

Promise.race([p1, p2, p3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
});

// It will wait for the 1st settled success.
// If all fails, then it will give 'AggregateError' after all are rejected.

Promise.any([p1, p2, p3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err);
    console.error(err.errors); // array of error messages
});