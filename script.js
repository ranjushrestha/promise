const cart = ["shoes", "pants", "shirt"];

const promise = createOrder(cart);

promise.then(function (orderId) {
  console.log(orderId);
  
});

function createOrder() {
  const pr = new Promise (function (res, rej) {
    // createOrder
    //validateCart
    //orderId
    if(!validateCart(cart)) {
      const err = new Error("cart is not valid");
      rej(err);
    }
    // logic for createOrder
    const orderId = "585858";
    if(orderId) {
      res(orderId);
    }


  });

  return pr;
}

function validateCart(cart) {
  return true;
}

