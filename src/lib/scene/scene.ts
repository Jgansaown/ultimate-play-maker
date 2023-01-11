import type * as d3 from 'd3';
import { get_background_data, type SceneBackgroundData } from './background';

export interface SceneConfiguration {
  orientation: 'vert' | 'hori';
}

function drawField(bg: d3.Selection<SVGGElement, SceneBackgroundData, null, undefined>) {
  bg.selectAll('rect')
    .data((d) => d.field)
    .join('rect')
    .attr('fill', (d) => d.fill)
    .attr('x', (d) => d.x.pos)
    .attr('y', (d) => d.y.pos)
    .attr('width', (d) => d.x.length)
    .attr('height', (d) => d.y.length);
}

function drawBrick(bg: d3.Selection<SVGGElement, SceneBackgroundData, null, undefined>) {
  bg.selectAll('.brick')
    .data((d) => d.brick)
    .join('g')
    .classed('brick', true)
    .attr('stroke', (d) => d.stroke)
    .attr('stroke-width', (d) => d['stroke-width'])
    .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
    .selectAll('line')
    .data((d) => {
      const l = d.length / 2;
      return [
        { x1: -l, y1: -l, x2: +l, y2: +l },
        { x1: +l, y1: -l, x2: -l, y2: +l }
      ];
    })
    .join('line')
    .attr('x1', (d) => d.x1)
    .attr('y1', (d) => d.y1)
    .attr('x2', (d) => d.x2)
    .attr('y2', (d) => d.y2);
}

export function initScene(
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  config?: SceneConfiguration
) {
  const data = get_background_data(config ?? { orientation: 'vert' });
  if (data == undefined) {
    return;
  }
  const svg = selection.datum(data);

  // set size
  svg
    ?.attr('preserveAspectRatio', 'xMidYMid meet')
    .style('height', '100%')
    .style('width', '100%')
    .attr('viewBox', (d) => `0 0 ${d.size.x} ${d.size.y}`);

  // create bg
  const bg = svg?.select('#background').node()
    ? svg?.select<SVGGElement>('#background')
    : svg?.append('g').attr('id', 'background');

  // draw background
  bg?.call(drawField).call(drawBrick);
}
