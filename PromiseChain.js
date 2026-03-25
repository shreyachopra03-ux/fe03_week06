// consuming promises
// Promise chaining helps get rid of callback hell.
const cart = ["shoes", "tshirts" , "shoes"];

createOrder(cart)
    .then(function (orderId) {
       console.log(orderId);
       return orderId;
    })
    .then(function(orderId) {
       return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
      console.log(err.message);
    })
    .then(function (orderId) {
        console.log("No matter what happends, I will definitely be called.")
    })

// Producer end
// creating a promise
function createOrder(cart) {

    const pr = new Promise(function (resolve, reject) {
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)) {
            const err = new Error("Cart Isn't Valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if(!orderId) {
            setTimoeut(function() {
                resolve(orderId)
            }, 5000)};
    });

    return pr;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {

    /// 
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
}