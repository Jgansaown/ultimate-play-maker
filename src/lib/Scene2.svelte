<script lang="ts">
  import { drag, scaleLinear, schemeCategory10, select } from "d3";
  import { onMount } from "svelte";

  export let players: { y: number; x: number }[];

  let svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;

  onMount(() => {
    svg = select("#scene")
      .append("svg")
      .attr("viewBox", "0 0 37 100")
      .attr("preserveAspectRatio", "xMinYMid")
      .style("height", "100%")
      .style("width", "100%");

    const field = svg;
    field
      .append("rect")
      .attr("x", "0")
      .attr("y", "0")
      .attr("height", "18%")
      .attr("width", "100%")
      .attr("fill", "#73b11b");
    field
      .append("rect")
      .attr("x", "0")
      .attr("y", "18%")
      .attr("height", "64%")
      .attr("width", "100%")
      .attr("fill", "#82c91e");
    field
      .append("rect")
      .attr("x", "0")
      .attr("y", "82%")
      .attr("height", "18%")
      .attr("width", "100%")
      .attr("fill", "#73b11b");
  });

  $: if (players && svg) {
    console.table(players);
    const width = parseInt(svg.style("width"));
    const height = parseInt(svg.style("height"));

    const xScale = scaleLinear().domain([0, 100]).range([0, 37]);
    const yScale = scaleLinear().domain([0, 100]).range([0, 100]);

    function _drag() {
      function _start() {
        select(this).attr("stroke", "black");
      }
      function _drag(event, d) {
        d.x += xScale.invert(event.dx);
        d.y += yScale.invert(event.dy);
        select(this).raise().attr("cx", xScale(d.x)).attr("cy", yScale(d.y));
      }
      function _end() {
        select(this).attr("stroke", null);
      }
      return drag<SVGCircleElement, { y: number; x: number }>()
        .on("start", _start)
        .on("drag", _drag)
        .on("end", _end);
    }
    svg
      .selectAll("circle")
      .data(players)
      .join("circle")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", "2.5%")
      .attr("fill", (d, i) => schemeCategory10[i % 10])
      .call(_drag())
      //   .on("mouseenter", function () {
      //     select(this)
      //       .transition()
      //       .attr("fill", "black")
      //       .attr("r", "5%")
      //       .transition()
      //       .attr("r", "2.5%")
      //       .attr("fill", "blue");
      //   })
      .on("click", function (event, d) {
        if (event.defaultPrevented) return; // dragged
        // select(this)
        //   .transition()
        //   .attr("fill", "black")
        //   .attr("r", "5%")
        //   .transition()
        //   .attr("r", "2.5%")
        //   .attr("fill", "blue");
      });
  }
</script>

<div id="scene" />

<style>
  #scene {
    height: 100%;
    width: 100%;
  }
</style>
