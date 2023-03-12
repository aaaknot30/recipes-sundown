import type { PageServerLoad } from './$types';
import recipes from '../../db/recipes2_2.json'

let mealType = ''
let dietType = ''

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    // console.log("data -- ", data)
    mealType = data.get('mealType');
    dietType = data.get('dietType');
    // console.log("mealType -- ", mealType)
    // console.log("dietType -- ", dietType)
 
    return { success: true };
  }
} satisfies Actions;



export const load = (async ({ params, fetch }) => {

  const mealArr = [
    "breakfast",
    "lunch",
    "dinner",
    "snack"
  ]
  
  const dietArr = [
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
  ]



  const mealPart = mealType ? "&mealType=" + mealType : "&mealType=lunch"
  const dietPart = dietType ? "&diet=" + dietType : ''
  let search = mealPart + dietPart
  // console.log(`https://api.edamam.com/api/recipes/v2?app_id=8383a2f8&app_key=81ec33688b0e78a1edf0a24ec5e05f45&type=public${search}`)

  const results = await fetch(`https://api.edamam.com/api/recipes/v2?random=true&app_id=8383a2f8&app_key=81ec33688b0e78a1edf0a24ec5e05f45&type=public${search}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Recipes Sundown /0.1 +http://adb.recipes-sundown.com"  
    }
  });

const recipes = await results.json();

//  console.log(recipes)


  return {
    recipes, mealArr, dietArr, mealType, dietType
  };
}) satisfies PageServerLoad;
