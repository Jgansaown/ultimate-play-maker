<script lang="ts">
  import { prevent_default } from "svelte/internal";

  //   import { drag, select } from "d3";
  //   import { onMount } from "svelte";

  //   export let state: {
  //     x: number;
  //     y: number;
  //   } = { x: 0, y: 0 };

  export let y: number | string;
  export let x: number | string;
  export let r: number | string;
  export let fill: string;

  //   onMount(() => {
  //     select("circle").call(
  //       drag().on("start", started).on("drag", dragged).on("end", ended)
  //     );
  //   });

</script>

<circle cy={y} cx={x} {r} {fill} />

<style>
</style>
