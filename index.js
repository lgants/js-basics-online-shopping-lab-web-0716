var cart;

function setCart(newCart) {
 cart = newCart;
}

function total() {
 let t = 0;

 for (var i = 0, l = cart.length; i < l; i++) {
   for (var item in cart[i]) {
     t += cart[i][item];
   }
 }

 return t
}

function getCart() {
 return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 getCart().push({[item]:price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length > 0){
 var str = "In your cart, you have";
 for (var i = 0; i < cart.length; i++) {
   var key = Object.keys(cart[i]);
   str += ` ${key[0]} at $${cart[i][key]},`
 }
 console.log(str.slice(0,-1) + ".")
 } else {
   console.log("Your shopping cart is empty.");
 }
}


function removeFromCart(item){
  let itemInCart = false;
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber){
  if (cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
