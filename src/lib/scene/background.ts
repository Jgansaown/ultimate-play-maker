import type { SceneConfiguration } from './scene';

export interface SceneBackgroundData {
  size: { x: number; y: number };
  field: FieldData;
  brick: BrickData[];
}

type FieldData = {
  x: { pos: number; length: number };
  y: { pos: number; length: number };
  fill: string;
}[];

interface BrickData {
  stroke: string;
  ['stroke-width']: string;
  length: number;
  x: number;
  y: number;
}

const VERT_BACKGROUND_DATA: SceneBackgroundData = {
  size: { x: 37, y: 100 },
  field: [
    { x: { pos: 0, length: 37 }, y: { pos: 0, length: 18 }, fill: '#73b11b' },
    { x: { pos: 0, length: 37 }, y: { pos: 18, length: 64 }, fill: '#82c91e' },
    { x: { pos: 0, length: 37 }, y: { pos: 82, length: 18 }, fill: '#73b11b' }
  ],
  brick: [
    { stroke: 'black', 'stroke-width': '0.25px', x: 18, y: 36, length: 1 },
    { stroke: 'black', 'stroke-width': '0.25px', x: 18, y: 64, length: 1 }
  ]
};
const HORI_BACKGROUND_DATA: SceneBackgroundData = {
  size: { x: 100, y: 37 },
  field: [
    { x: { pos: 0, length: 18 }, y: { pos: 0, length: 37 }, fill: '#73b11b' },
    { x: { pos: 18, length: 64 }, y: { pos: 0, length: 37 }, fill: '#82c91e' },
    { x: { pos: 82, length: 18 }, y: { pos: 0, length: 37 }, fill: '#73b11b' }
  ],
  brick: [
    { stroke: 'black', 'stroke-width': '0.25px', x: 36, y: 18, length: 1 },
    { stroke: 'black', 'stroke-width': '0.25px', x: 64, y: 18, length: 1 }
  ]
};

export function get_background_data(config: SceneConfiguration): SceneBackgroundData | undefined {
  if (config.orientation === 'vert') {
    return VERT_BACKGROUND_DATA;
  } else if (config.orientation === 'hori') {
    return HORI_BACKGROUND_DATA;
  }
  return undefined;
}
