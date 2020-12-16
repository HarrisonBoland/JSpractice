function landPerimeter(arr) {
  let totalPerimeter = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentLevel = arr[i].split('');
    let levelPer = 0;
    for (let j = 0; j < currentLevel.length; j++) {
      let value = currentLevel[j];
      let count = 4;
      if (value === 'X') {
        if (currentLevel[j + 1] === 'X') {
          count -= 1;
        }
        if (currentLevel[j - 1] === 'X') {
          count -= 1;
        }
        if (i > 0) {
          let above = arr[i - 1].split('')[j];
          if (above === 'X') {
            count -= 1;
          }
        }
        if (i < arr.length - 1) {
          let below = arr[i + 1].split('')[j];
          if (below === 'X') {
            count -= 1;
          }
        }
      } else if (value === 'O') {
        count = 0;
      }
      levelPer += count;
    }
    totalPerimeter += levelPer;
  }

  return `Total land perimeter: ${totalPerimeter}`;
}

console.log(landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO']));
console.log(
  landPerimeter([
    'OXOOOX',
    'OXOXOO',
    'XXOOOX',
    'OXXXOO',
    'OOXOOX',
    'OXOOOO',
    'OOXOOX',
    'OOXOOO',
    'OXOOOO',
    'OXOOXX',
  ])
);

/*
X0XX0
00000
XX0XX
0X0XX
00000
0XXX0
0XXX0
0XXX0
00000
*/
