"use strict";
const RESTAURANT_API="https://jsonplaceholder.typicode.com/users";
const CART_KEY="quickbite-console-cart";
const MENU=[
{id:1,name:"Paneer Tikka",price:180,category:"Food",isVegetarian:true},
{id:2,name:"Veg Biryani",price:220,category:"Food",isVegetarian:true},
{id:3,name:"Chicken Biryani",price:280,category:"Food",isVegetarian:false},
{id:4,name:"Masala Dosa",price:140,category:"Food",isVegetarian:true},
{id:5,name:"Cold Coffee",price:120,category:"Beverage",isVegetarian:true},
{id:6,name:"Chicken Burger",price:250,category:"Food",isVegetarian:false},
{id:7,name:"Mango Lassi",price:110,category:"Beverage",isVegetarian:true},
{id:8,name:"French Fries",price:130,category:"Food",isVegetarian:true}
];
let cart=loadCart();
function loadCart(){try{const saved=JSON.parse(localStorage.getItem(CART_KEY));return Array.isArray(saved)?saved:[];}catch{return[];}}
function saveCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart));}
function browseMenu(){console.log("\n========================================");console.log("BROWSE MENU");console.log("========================================");console.table(MENU);}
function addToCart(id,quantity=1){
 const dish=MENU.find(d=>d.id===id); if(!dish){console.error("Dish not found.");return;}
 const existing=cart.find(d=>d.id===id);
 if(existing) existing.quantity+=quantity; else cart.push({id:dish.id,name:dish.name,price:dish.price,quantity});
 saveCart(); console.log(`ADDED: ${dish.name} × ${quantity}`);
}
function viewCart(){
 console.log("\n========================================");console.log("VIEW CART");console.log("========================================");
 if(!cart.length){console.log("Cart is empty.");return;}
 console.table(cart);
 const totalItems=cart.reduce((s,i)=>s+i.quantity,0);
 const totalPrice=cart.reduce((s,i)=>s+i.price*i.quantity,0);
 console.log(`Total Items: ${totalItems}`); console.log(`Total Price: Rs ${totalPrice}`);
}
function clearCart(){cart=[];saveCart();console.log("\nCLEAR CART: Cart cleared successfully.");}
async function loadRestaurants(){
 console.log("\n========================================");console.log("RESTAURANT API");console.log("========================================");console.log("Loading restaurants...");
 try{const response=await fetch(RESTAURANT_API);if(!response.ok)throw new Error(`HTTP ${response.status}`);const restaurants=await response.json();console.table(restaurants.map(r=>({id:r.id,restaurant:r.name})));}
 catch(error){console.error("ERROR: Restaurant API request failed.");console.error(error.message);}
}
async function runCapstone(){
 console.clear();console.log("========================================");console.log("QUICKBITE — FOOD DELIVERY");console.log("CONSOLE CAPSTONE");console.log("========================================");
 browseMenu(); console.log("\nDemo order:"); addToCart(1,2);addToCart(5,1);addToCart(3,1);viewCart();await loadRestaurants();
 console.log("\nAvailable controls:");console.log("addToCart(id, quantity)");console.log("viewCart()");console.log("clearCart()");
}
runCapstone();
