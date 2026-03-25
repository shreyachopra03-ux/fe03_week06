// Callback plays a very important role in writing async code in js.

// Callback Hell (1st Problem with callbacks) -> unmaintainable and unreadable

// INVERSION OF CONTROL => 2nd problem while using callbacks 

const cart = ["shoes", "pants", "kurti"];

api.createOrder(cart, function() {

   api.proceedToPyament();

});


