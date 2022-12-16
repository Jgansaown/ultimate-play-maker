<script lang="ts">
  import Scene2 from '$lib/Scene2.svelte';

  let players: {
    y: number;
    x: number;
  }[] = [];
  function addPlayer() {
    players = [...players, { x: 50, y: 50 }];
  }
  function removePlayer() {
    players = players.slice(0, -1);
  }
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<button on:click={addPlayer}>Add</button><button on:click={removePlayer}>Remove</button>

<div class="scene-container">
  <!-- <Scene {players} /> -->
  <Scene2 {players} />
</div>

<style>
  .scene-container {
    width: 100%;
    height: 90vh;
  }

  button {
    @apply rounded-md border-2 border-black border-solid px-2 mx-2;
  }
</style>
