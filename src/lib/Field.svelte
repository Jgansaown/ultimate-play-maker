<script lang="ts">
  export let svg: SVGElement;
  let svg_height: number = 0;
  let svg_width: number = 0;

//   $: {
//     console.log(svg_height, svg_width);
//   }
</script>

<svg height="100%" width="100%" bind:this={svg}>
  <rect x="0" y="0" height="18%" width="100%" fill="#73b11b" />
  <rect x="0" y="18%" height="64%" width="100%" fill="#82c91e" />
  <rect x="0" y="82%" height="18%" width="100%" fill="#73b11b" />
  <slot />
</svg>

<style>
</style>
