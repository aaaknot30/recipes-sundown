<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#each data.recipes.hits as hit}
  <h2>{hit.recipe.label}</h2>
  <div class="recipeCard">
    <div class="flexRow" />
    <div class="flexRow">
      <div class="flexColumn">
        <p><strong>Cusine:</strong></p>
        <ul>
          {#each hit.recipe.cuisineType as type}
            <li>{type}</li>
          {/each}
        </ul>

        <p><strong>Mealtype:</strong></p>
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
        <ul>
          <li>{(hit.recipe.calories / hit.recipe.yield).toFixed()}/person</li>
        </ul>

        <p><strong>Nutrients:</strong></p>
        <ul>
          {#each hit.recipe.digest.slice(0, 4) as item, i}
            <li>{item.label}: {item.total.toFixed()} {item.unit}</li>
          {/each}
        </ul>

        <p><strong>Origin:</strong></p>
        <ul>
          <li>
            <a target="_blank" href={hit.recipe.url}>{hit.recipe.source}</a>
          </li>
        </ul>
      </div>

      <div class="flexColumn ingedients-width">
        <div>
          <p><strong>Ingredients:</strong></p>
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
</style>
