// Callback plays a very important role in writing async code in js.

// Callback Hell (1st Problem with callbacks) -> unmaintainable and unreadable

const cart = ["shoes", "pants", "kurti"];

api.createOrder(cart, function() {

    api.processToPyament(function() {

        api.showOrderSummary(function() {

            api.updateWallet()
        });
    });
});

// INVERSION OF CONTROL => 2nd problem while using callbacks 

