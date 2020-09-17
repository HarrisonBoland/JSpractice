// My Attempt
function streetFighterSelection(fighters, position, moves) {
  let results = [];
  let posHoz = 0;
  let posVert = 0;

  for (let i = 0; i < moves.length; i++) {
    console.log(posHoz);
    if (moves[i] === 'up') {
      posHoz = 0;
    } else if (moves[i] === 'down') {
      posHoz = 1;
    } else if (moves[i] === 'left') {
      posVert === 0 ? (posVert = fighters[0].length - 1) : (posVert += -1);
    } else if (moves[i] === 'right') {
      posVert === fighters[0].length - 1 ? (posVert = 0) : (posVert += 1);
    }

    let position = fighters[posHoz][posVert];
    results.push(position);
  }

  return results;
}

const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
let moves;
moves = ['up', 'left', 'right', 'left', 'left'];
moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0, 0], moves));
