function bestMatch(ALAHLYGoals, zamalekGoals) {
  const amountOfGames = ALAHLYGoals.length
  let smallestDifference = 99999999999999;
  let mostGoals = 0
  let whichGame = 0;
  for (let i = 0; i < amountOfGames; i++) {
    let difference = ALAHLYGoals[i] - zamalekGoals[i]
    if (difference === smallestDifference && zamalekGoals[i] > mostGoals) {
      whichGame = i
      smallestDifference = difference
      mostGoals = zamalekGoals[i];
    } else if (difference < smallestDifference) {
      whichGame = i
      smallestDifference = difference
      mostGoals = zamalekGoals[i]
    }
  }
  return whichGame
}

console.log(bestMatch([6, 4],[1, 2]))
console.log(bestMatch([1],[0]))
console.log(bestMatch([1, 2, 3, 4, 5],[0, 1, 2, 3, 4]))
console.log(bestMatch([4, 3, 4],[1, 1, 1]))