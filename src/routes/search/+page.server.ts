import type { PageServerLoad } from './$types';
import recipes from '../../db/recipes2_3.json'


 
let searchType = ''
let searchWord = ''
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    // console.log("data -- ", data)
    searchType = data.get('searchType');
    //console.log("searchType -- ", searchType)
 
    return { success: true };
  }
} satisfies Actions;


export const load = (async ({ params, fetch, url }) => {

    // console.log("Key/Value")
    for (const [key, value] of url.searchParams) {
      // console.log(key, value)
      if (key === 'searchWord') {
        searchWord = value
      }
    }

    let search
    if (!searchType) {
      search = searchWord
    } else {
      search = searchType
    }
  
  const results = await fetch(`https://api.edamam.com/api/recipes/v2?random=true&app_id=8383a2f8&app_key=81ec33688b0e78a1edf0a24ec5e05f45&type=public&q=${search}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Recipes Sundown /0.1 +http://adb.recipes-sundown.com" 
    }
  });



const recipes = await results.json();

// console.log(recipes)


  return {
    recipes
  };
}) satisfies PageServerLoad;