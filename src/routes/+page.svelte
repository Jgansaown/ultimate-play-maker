<script lang="ts">
  import { onMount } from 'svelte';
  import Scene from '$lib/scene/Scene.svelte';

  onMount(() => {});

  let orientation: 'vert' | 'hori' = 'vert';
</script>

<button
  on:click={() => {
    orientation = orientation === 'vert' ? 'hori' : 'vert';
  }}>Toggle</button
>

<div id="container">
  <Scene
    config={{
      orientation: orientation
    }}
    players={[]}
  />
</div>

<style lang="postcss">
  #container {
    width: 100%;
    height: 90vh;
  }
</style>
