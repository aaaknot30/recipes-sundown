<script lang="ts">
  import type { LayoutData } from './$types';
  import '../css/styles.css'

  export let data: LayoutData;
</script>

<main>
  <header>
    <div class="header-item">
      <a href="/"> <h1>Recipes Sundown</h1> </a>
    </div>
    <div class="header-item">
      <form method="POST" action=/search>
          <input
            name="searchType"
            type="text"
            placeholder="search"
          />
          <button type="submit">Go</button>
          <div class="header-item">
            <a href="/cuisines">Cuisines</a>
            <a href="/meals">Meals</a>
            <a href="/">Home</a>
          </div>
  
      </form>
    </div>

  </header>

<div class="content-section">
  <slot />
</div>

  <footer>
    By Kyle Larson, 3/2023
  </footer>
</main>

<style>


</style>

