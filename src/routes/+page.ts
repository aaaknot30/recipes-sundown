import type { PageLoad } from './$types';
import recipes from '../db/recipes2_1.json'



 
export const load = (({ params, url }) => {


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
    "Shrimp fettucine"
    
    ]
    

const rndNum = Math.floor(Math.random() * 20)

// console.log(recipes)


  return {
    recipes, examplesArr, rndNum
  };
}) satisfies PageLoad;