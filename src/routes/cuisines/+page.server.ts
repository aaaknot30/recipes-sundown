import type { PageServerLoad } from './$types';
import recipes from '../../db/recipes2_1.json'
 
let cuisineType = ''
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    // console.log("data -- ", data)
    cuisineType = data.get('cuisineType');
    // console.log("cuisineType -- ", cuisineType)
 
    return { success: true };
  }
} satisfies Actions;




export const load = (async ({ params, fetch }) => {

  let search
  const cuisinesArr = [
    "american", "asian", "caribbean", "central europe", "chinese", "eastern europe", "french", "greek", "indian", "italian", "japanese", "korean", "kosher", "mediterranean", "mexican", "middle eastern", "nordic", "south american", "south east asian", "world"
  ]
  
  const randomCuisine = cuisinesArr[Math.floor(Math.random() * cuisinesArr.length -1)]
  if (!cuisineType) {
    search = randomCuisine
  } else {
    search = cuisineType
  }


  const results = await fetch(`https://api.edamam.com/api/recipes/v2?random=true&app_id=8383a2f8&app_key=81ec33688b0e78a1edf0a24ec5e05f45&type=public&cuisineType=${search}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Recipes Sundown /0.1 +http://adb.recipes-sundown.com"  
    }
  });

const recipes = await results.json();

//  console.log(recipes)


  return {
    recipes, cuisinesArr, cuisineType
  };
}) satisfies PageServerLoad;