export interface PlayerData {
  id: string;
}

export function updatePlayers(
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: PlayerData[]
) {
  const g = selection.select('#players').node()
    ? selection.select<SVGGElement>('#players')
    : selection.append('g').attr('id', 'players');

  const players = g.datum(data);

  console.log(selection, data);
}
