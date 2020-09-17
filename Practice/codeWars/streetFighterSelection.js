// My Attempt
// function streetFighterSelection(fighters, position, moves) {
//   let results = [];
//   let posHoz = 0;
//   let posVert = 0;

//   for (let i = 0; i < moves.length; i++) {
//     console.log(posHoz);
//     if (moves[i] === 'up') {
//       posHoz = 0;
//     } else if (moves[i] === 'down') {
//       posHoz = 1;
//     } else if (moves[i] === 'left') {
//       posVert === 0 ? (posVert = fighters[0].length - 1) : (posVert += -1);
//     } else if (moves[i] === 'right') {
//       posVert === fighters[0].length - 1 ? (posVert = 0) : (posVert += 1);
//     }

//     let position = fighters[posHoz][posVert];
//     results.push(position);
//   }

//   return results;
// }

// const fighters = [
//   ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
//   ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
// ];
// let moves;
// moves = ['up', 'left', 'right', 'left', 'left'];
// moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
// console.log(streetFighterSelection(fighters, [0, 0], moves));

// Harder Version
function superStreetFighterSelection(fighters, position, moves) {
  let results = [];
  let posHoz = position[0];
  let posVert = position[1];
  // let count = 1;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'up') {
      posHoz === 0 ? (posHoz = 0) : (posHoz += -1);
      // while (fighters[posHoz][posVert] === '') {
      //   if (posHoz === 0) {
      //     posHoz += count;
      //     count += 1;
      //   } else {
      //     posHoz += -1;
      //   }
      // }
      // count = 1;
      if (fighters[posHoz][posVert] === '') {
        posHoz += 1;
      }
    } else if (moves[i] === 'down') {
      posHoz === fighters.length - 1
        ? posHoz === fighters.length - 1
        : (posHoz += 1);
      // while (fighters[posHoz][posVert] === '') {
      //   if (posHoz === fighters.length - 1) {
      //     posHoz += -count;
      //     count += 1;
      //   } else {
      //     posHoz += 1;
      //   }
      // }
      // count = 1;
      if (fighters[posHoz][posVert] === '') {
        posHoz += -1;
      }
    } else if (moves[i] === 'left') {
      posVert === 0 ? (posVert = fighters[0].length - 1) : (posVert += -1);
      while (fighters[posHoz][posVert] === '') {
        if (posVert === 0) {
          posVert = fighters[0].length - 1;
        } else {
          posVert += -1;
        }
      }
    } else if (moves[i] === 'right') {
      posVert === fighters[0].length - 1 ? (posVert = 0) : (posVert += 1);
      while (fighters[posHoz][posVert] === '') {
        if (posVert === fighters[0].length - 1) {
          posVert = 0;
        } else {
          posVert += 1;
        }
      }
    }

    let position = fighters[posHoz][posVert];
    results.push(position);
  }

  return results;
}

let fighters, position, moves;
fighters = [
  ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
  ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
  ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
];
fighters = [
  ['Vega', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
  ['', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
  ['', 'T.Hawk', '', 'Deejay', 'Cammy', 'M.Bison'],
];
fighters = [
  ['', 'Ryu', 'E.Honda', 'Cammy', 'Blanka', 'Guile', '', 'Chun Li'],
  ['Balrog', 'Ken', 'Chun Li', '', 'M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
  ['Vega', '', 'Fei Long', 'Balrog', 'Deejay', 'Cammy', '', 'T.Hawk'],
];
position = [0, 3];
moves = ['up', 'up', 'down', 'down', 'up', 'right', 'left', 'left'];
moves = [
  'down',
  'right',
  'right',
  'right',
  'down',
  'left',
  'left',
  'down',
  'right',
  'right',
  'right',
  'up',
];
console.log(superStreetFighterSelection(fighters, position, moves));
