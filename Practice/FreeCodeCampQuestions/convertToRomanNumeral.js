function convertToRoman(num) {
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let result = [];
  const numList = num.toString().split('').reverse();

  let pos = 0;
  for (let i = 0; i < numList.length; i++) {
    let num = parseInt(numList[i]);

    if (num === 0) {
      result.push('');
    } else if (num < 4) {
      result.push(symbols[pos].repeat(num));
    } else if (num == 4) {
      result.push(symbols[pos] + symbols[pos + 1]);
    } else if (num === 5) {
      result.push(symbols[pos + 1]);
    } else if (num < 9) {
      result.push(symbols[pos + 1] + symbols[pos].repeat(num - 5));
    } else if (num === 9) {
      result.push(symbols[pos] + symbols[pos + 2]);
    }

    pos += 2;
  }

  return result.reverse().join('');
}

console.log(convertToRoman(400));
