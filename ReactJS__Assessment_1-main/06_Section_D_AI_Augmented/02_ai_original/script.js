"use strict";
const API_URL="https://jsonplaceholder.typicode.com/posts";const KEY="m1a1-ai-original-favourites";
async function loadFoods(){console.log("Loading food items...");try{const response=await fetch(API_URL);const posts=await response.json();const favourites=JSON.parse(localStorage.getItem(KEY)||"[]");console.log("\nFOOD ITEMS:");posts.slice(0,10).forEach(post=>{const mark=favourites.includes(post.id)?"[FAV]":"[ ]";console.log(`${mark} ${post.id}. ${post.title}`);});if(posts.length){favourites.push(posts[0].id);localStorage.setItem(KEY,JSON.stringify(favourites));console.log(`\nAdded "${posts[0].title}" to favourites.`);}}catch(error){console.error("Something went wrong.");console.error(error.message);}}
loadFoods();
