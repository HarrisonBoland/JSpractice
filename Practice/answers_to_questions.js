function findNthOccurance(string, nth, term) {
  let strReplace = string;
  let hash = '#'.repeat(term.length);

  for (let i = 0; i <= nth; i++) {
    if (i === nth) {
      return strReplace.indexOf(term);
    }
    strReplace = strReplace.replace(term, hash);
  }

  return -1;
}

console.log(findNthOccurance('Abcabcabc', 3, 'b'))
console.log(findNthOccurance('example: This is an example of example text', 2, 'example'))

function countSequence(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let count = 0;
  let result = 0;
  let testArr = []
  let resultArr = []

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] === sortedArr[i] + 1) {
      count += 1;
      testArr.push(sortedArr[i])
    } else if (count > result) {
      testArr.push(sortedArr[i])
      result = count + 1;
      resultArr = []
      resultArr = testArr
      count = 0
      testArr = []
    }
  }

  //console.log(result)
  return resultArr;
}

console.log(countSequence([1, 9, 3, 10, 4, 20, 2]));
console.log(countSequence([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]));