// My attempt
var numberToPrice = function (number) {
  let neg = ''
  if (!(number / 2)) {
    return 'NaN'
  } else if (number < 0) {
    neg = '-'
    number = number * -1
  }
  
  // Splits number into whole number and decimal number
  let numberArr = number.toString().split('.');

  // Adds 0's / rounds to 2 based on the length of the decimal
  if (!numberArr[1]) {
    numberArr[1] = '00';
  } else if (numberArr[1].length >= 2) {
    numberArr[1] = numberArr[1][0] + numberArr[1][1];
  } else {
    numberArr[1] += '0';
  }

  // Gets information on the position of commas
  const posOfCommas = numberArr[0].length % 3;
  
  // Adds - to number if it is a negaitive number
  let num = numberArr[0];
  if (neg === '-') {
    numberArr[0] = neg;
  } else {
    numberArr[0] = neg;
  }
  
  // Add's commas based on postion
  for (let i = 0; i < num.length; i++) {
    if (i % 3 === posOfCommas && i > 0) {
      numberArr[0] += ',';
      numberArr[0] += num[i];
    } else {
      numberArr[0] += num[i];
    }
  }

  // Joins the array by a '.'
  return numberArr.join('.');
};

console.log(numberToPrice(-1000000));
