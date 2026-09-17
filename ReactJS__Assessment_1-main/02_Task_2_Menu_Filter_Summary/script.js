"use strict";
const dishes=[
{name:"Paneer Tikka",price:180,category:"Food",isVegetarian:true},
{name:"Veg Biryani",price:220,category:"Food",isVegetarian:true},
{name:"Chicken Biryani",price:280,category:"Food",isVegetarian:false},
{name:"Masala Dosa",price:140,category:"Food",isVegetarian:true},
{name:"Cold Coffee",price:120,category:"Beverage",isVegetarian:true},
{name:"Chicken Burger",price:250,category:"Food",isVegetarian:false}
];
const vegetarianDishes=dishes.filter(d=>d.isVegetarian);
const formattedMenu=dishes.map(d=>`${d.name} – Rs ${d.price}`);
const totalPrice=dishes.reduce((total,d)=>total+d.price,0);
console.clear();
console.log("========================================");
console.log("TASK 2 — MENU FILTER & SUMMARY");
console.log("========================================");
console.log("\nVEGETARIAN DISHES"); console.table(vegetarianDishes);
console.log(`Vegetarian Count: ${vegetarianDishes.length}`);
console.log("\nFORMATTED MENU"); formattedMenu.forEach((item,i)=>console.log(`${i+1}. ${item}`));
console.log(`\nTOTAL MENU PRICE: Rs ${totalPrice}`);
