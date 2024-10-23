// const cart = ["shoes", "pants", "shirt"];


// createOrder(cart)
// .then(function (orderId) {
//   console.log(orderId);
//   return orderId;
// })
// .then(function (orderId) {
//   return proceedToPayment(orderId);
// })
// .then(function (paymentInfo) {
//   console.log(paymentInfo);
// })
// .catch(function (err) {
//   console.log(err.message);
// });

// function createOrder(cart) {
//   return new Promise (function (res, rej) {
//     // createOrder
//     //validateCart
//     //orderId
//     if(!validateCart(cart)) {
//       const err = new Error("cart is not valid");
//       rej(err);
//     }
//     // logic for createOrder
//     const orderId = "585858";
//     if(orderId) {
//       setTimeout(function () {
//         res(orderId);
//       }, 5000)
     
//     }


//   });

  
// }

// function proceedToPayment(orderId) {
//   ///proceedToPayment
//   return new Promise (function(res, rej) {
//       res("payment successful")
//   });
// }

// function validateCart(cart) {
//   return true;
// }

