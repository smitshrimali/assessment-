"use strict";
const cart=[];
function handleAddToCart(event,dishName,quantity){
  if(event&&typeof event.preventDefault==="function") event.preventDefault();
  const name=String(dishName??"").trim(); const qty=Number(quantity);
  if(!name||!Number.isInteger(qty)||qty<1){console.error("ERROR: Dish name and valid quantity are required.");return false;}
  cart.push({dishName:name,quantity:qty}); console.log(`SUCCESS: ${name} × ${qty} added to cart.`); return true;
}
function showCart(){console.log("\nCURRENT CART");console.table(cart);}
console.clear();
console.log("========================================");
console.log("TASK 3 — LIVE ORDER FORM");
console.log("========================================");
handleAddToCart({preventDefault(){}}, "Paneer Tikka",2);
handleAddToCart({preventDefault(){}}, "Veg Biryani",1);
handleAddToCart({preventDefault(){}}, "",2);
handleAddToCart({preventDefault(){}}, "Cold Coffee",0);
showCart();
console.log("\nEvent concept: addEventListener('submit', handler)");
console.log("event.preventDefault() prevents the default form submission.");
