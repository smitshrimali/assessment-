"use strict";
const API_URL="https://jsonplaceholder.typicode.com/users";
const STORAGE_KEY="m1a1-favourite-restaurant";
function getFavourite(){return localStorage.getItem(STORAGE_KEY);}
function saveFavourite(name){localStorage.setItem(STORAGE_KEY,name);}
async function loadRestaurants(){
 console.clear(); console.log("========================================"); console.log("TASK 4 — ORDER TRACKER"); console.log("========================================"); console.log("Loading restaurants...");
 try{
   const response=await fetch(API_URL); if(!response.ok) throw new Error(`HTTP ${response.status}`);
   const restaurants=await response.json(); console.log("\nRESTAURANT LIST");
   restaurants.forEach((r,i)=>console.log(`${i+1}. ${r.name}`));
   let favourite=getFavourite();
   if(!favourite&&restaurants.length){favourite=restaurants[0].name;saveFavourite(favourite);console.log(`\nFAVOURITE SAVED: ${favourite}`);}
   else console.log(`\nSAVED FAVOURITE: ${favourite||"None"}`);
   console.log("\nPersistence: localStorage");
 }catch(error){console.error("\nERROR: Unable to load restaurants.");console.error(error.message);}
}
loadRestaurants();
