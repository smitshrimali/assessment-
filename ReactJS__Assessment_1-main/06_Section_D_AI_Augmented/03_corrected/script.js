"use strict";
const API_URL="https://jsonplaceholder.typicode.com/posts";const KEY="m1a1-ai-corrected-favourites";
function loadFavourites(){try{const saved=JSON.parse(localStorage.getItem(KEY));return Array.isArray(saved)?[...new Set(saved)]:[];}catch{return[];}}
function saveFavourites(ids){localStorage.setItem(KEY,JSON.stringify([...new Set(ids)]));}
async function loadFoods(){console.clear();console.log("========================================");console.log("SECTION D — CORRECTED VERSION");console.log("========================================");console.log("Loading food items...");
try{const response=await fetch(API_URL);if(!response.ok)throw new Error(`HTTP ${response.status}`);const posts=await response.json();const favourites=loadFavourites();console.log("\nFOOD ITEMS:");posts.slice(0,10).forEach(post=>{const mark=favourites.includes(post.id)?"[FAV]":"[ ]";console.log(`${mark} ${post.id}. ${post.title}`);});if(posts.length){const first=posts[0];if(!favourites.includes(first.id)){favourites.push(first.id);saveFavourites(favourites);console.log(`\nFAVOURITE ADDED: ${first.title}`);}else console.log(`\nALREADY FAVOURITE: ${first.title}`);}console.log(`Saved favourite IDs: ${JSON.stringify(loadFavourites())}`);}catch(error){console.error("\nERROR: Unable to load food items.");console.error(error.message);}}
loadFoods();
