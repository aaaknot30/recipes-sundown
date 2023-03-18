<script lang="ts">
  import type { PageData } from "./$types";



  export let data: PageData;

  let cuisineRadio = data.cuisineType

  function uncheckRadios() {
    // cuisineRadio = ''
    var ele = document.getElementsByName("cuisineType");
    for(var i=0;i<ele.length;i++) {
        ele[i].checked = false;
      }
  }



</script>



<form method="POST" action="/cuisines">
  <div class="flexRow baseline">
    <div>
     <h2 class="title">Cuisines</h2> 
    </div>
    <div class="searchGroup">
     <strong>Select a cuisine:</strong> <button class="button" type="submit">Go</button>
     <a href="#" class="button clearBtn" on:click={uncheckRadios}>clear</a>
    </div>
  </div>
  <div class="flexRow radio-group">
    
    <div class="flexColumn">
      
    {#each data.cuisinesArr.slice(0,5) as cusisine}
      <p><input type="radio" name="cuisineType" bind:group={cuisineRadio} value={cusisine} />{cusisine}</p>
    {/each}
  </div>
  <div class="flexColumn">
    {#each data.cuisinesArr.slice(5,10) as cusisine}
      <p><input type="radio" name="cuisineType" bind:group={cuisineRadio} value={cusisine} />{cusisine}</p>
    {/each}
  </div>
  <div class="flexColumn">
    {#each data.cuisinesArr.slice(10,15) as cusisine}
      <p><input type="radio" name="cuisineType" bind:group={cuisineRadio} value={cusisine} />{cusisine}</p>
    {/each}
  </div>
  <div class="flexColumn">
    {#each data.cuisinesArr.slice(15,) as cusisine}
      <p><input type="radio" name="cuisineType" bind:group={cuisineRadio} value={cusisine} />{cusisine}</p>
    {/each}
  </div>
</div>

</form>

{#each data.recipes.hits as hit}


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
            {#if hit.recipe.dishType}
            {#each hit.recipe.dishType as type}
            <li>{type}</li>
            {/each}
          {/if}
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
            <li><a target="_blank" href={hit.recipe.url}>{hit.recipe.source}</a></li>
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
  .ingedients-width {
    width: 50%;
  }

</style>
