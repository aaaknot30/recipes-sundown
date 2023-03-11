import type { PageServerLoad } from './$types';
// import recipes from '../db/recipes2_1.json'



 
export const load = (async ({ params, fetch, url }) => {


  const examplesArr = [

    "Indian",
    "Greek",
    "Asian",
    "Mexican",
    "Cheese",
    "Chicken",
    "Avocados",
    "Steak",
    "High Fiber",
    "Low Carb",
    "Low Fat",
    "High Protein",
    "Breakfast",
    "Lunch",
    "Snack",
    "Dinner",
    "Cobb salad",
    "BBQ Ribs",
    "Cheeseburger",
    "Shrimp pasta"
    
    ]
    

const rndNum = Math.floor(Math.random() * 20)

const results = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=8383a2f8&app_key=81ec33688b0e78a1edf0a24ec5e05f45&type=public&q=${examplesArr[rndNum]}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "User-agent": "Recipes Sundown /0.1 +http://adb.recipes-sundown.com" 
  }
});



const recipes = await results.json();

// console.log(recipes)


  return {
    recipes, examplesArr, rndNum
  };
}) satisfies PageServerLoad;