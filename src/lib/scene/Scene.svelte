<script lang="ts">
  import * as d3 from 'd3';
  import { updatePlayers, type PlayerData } from './players';
  import { initScene, type SceneConfiguration } from './scene';

  export let config: SceneConfiguration;
  export let players: PlayerData[];

  let svgElement: SVGSVGElement;

  $: if (svgElement && config) {
    d3.select(svgElement).call(initScene, config);
  }

  $: if (svgElement && players) {
    d3.select(svgElement).call(updatePlayers, players);
  }
</script>

<svg bind:this={svgElement} />
