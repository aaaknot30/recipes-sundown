<script lang="ts">
  import type { PageData } from "./$types";


  export let data: PageData;

  function uncheckRadios() {
    // cuisineRadio = ''
    var ele = document.getElementsByName("searchWord");
    for(var i=0;i<ele.length;i++) {
        ele[i].checked = false;
      }
  }

  let searchRadio = ''

  const num = data.rndNum

  // const adjustedCalories = data.recipes.hits[0].recipe.calories.toF
  // console.log(typeof(adjustedCalories)) 

</script>



<div class="flexRow welcome">

  <div class="top-section">
    <h2 class="title">Home</h2>
    <p>Recipe Sundown uses the Edaman Recipe API for its content.  Edaman's database is full of recipes from various media. </p> 
    <p>Recipe Sundown makes accessing this data a breeze.</p>
    <div class="flexRow links">

      
<form method="POST" action="/search">
  <div class="flexRow baseline">
   
     <h3>Select a option:</h3> <button class="button" type="submit">Go</button>
     <a href="#" class="button clearBtn" on:click={uncheckRadios}>clear</a>
 
  </div>
  <div class="flexRow radio-group">
    
    <div class="flexRow homeSection">
      
      <div>
        <p><strong>Cuisines</strong></p>
        {#each data.examplesArr.slice(0,4) as example}
        <p><input type="radio" name="searchType" bind:group={searchRadio} value={example} />{example}</p>
        {/each}
      </div>

      <div>
        <p><strong>Ingredients</strong></p>
        {#each data.examplesArr.slice(4,8) as example}
        <p><input type="radio" name="searchType" bind:group={searchRadio} value={example} />{example}</p>
        {/each}
      </div>

      <div>
        <p><strong>Diet</strong></p>
        {#each data.examplesArr.slice(8,12) as example}
        <p><input type="radio" name="searchType" bind:group={searchRadio} value={example} />{example}</p>
        {/each}
      </div>

      <div>
        <p><strong>Meal</strong></p>
        {#each data.examplesArr.slice(12,16) as example}
        <p><input type="radio" name="searchType" bind:group={searchRadio} value={example} />{example}</p>
        {/each}
      </div>

      <div>
        <p><strong>Dish</strong></p>
        {#each data.examplesArr.slice(16,21) as example}
        <p><input type="radio" name="searchType" bind:group={searchRadio} value={example} />{example}</p>
        {/each}
      </div>

   


</form>
      

    </div>

  </div>
</div>


{#each data.recipes.hits.slice(num, num+1) as hit}


<h2>{hit.recipe.label}</h2>
  <div class="recipeCard">
    <div class="flexRow">
      
      
    </div>
    <div class="flexRow">

      <div class="flexColumn">
        

          <p><strong>Cusine:</strong> </p>
          <ul>
            {#each hit.recipe.cuisineType as type}
              <li>{type}</li>
            {/each}
          </ul>

          <p><strong>Mealtype:</strong> </p>
          <ul>
            {#each hit.recipe.dishType as type}
             <li>{type}</li>
            {/each}
            {#each hit.recipe.mealType as type}
              <li>{type}</li>
            {/each}
          </ul>

          <p><strong>Calories: </strong></p>
          <ul><li>{(hit.recipe.calories/hit.recipe.yield).toFixed()}/person</li></ul>

          <p><strong>Nutrients:</strong> </p>
          <ul>
            {#each hit.recipe.digest.slice(0, 4) as item, i}
              <li>{item.label}: {item.total.toFixed()} {item.unit}</li>
            {/each}
          </ul>    
          
          <p><strong>Origin:</strong> </p>
          <ul>
            <li><a href={hit.recipe.url}>{hit.recipe.source}</a></li>
          </ul>  

      </div>
      
      <div class="flexColumn ingedients-width">

        <div>
          <p><strong>Ingredients:</strong> </p>
          <ul>
            {#each hit.recipe.ingredientLines as line}
              <li>{line}</li>
            {/each}
          </ul>
        </div>

      </div>

      <div class="flexColumn">
        <img src={hit.recipe.image} alt="" />
    </div>

    </div>
  </div>
{/each}

<style>

  .homeSection div {
    width: 100%;
    text-align: left;
    min-width: 160px;
    padding: 0;
  }


</style>
