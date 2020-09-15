// My Attempt
// function sortByName(ary) {
//   const numberArrLow = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//     'ten',
//     'eleven',
//     'twelve',
//     'thirteen',
//     'fourteen',
//     'fifteen',
//     'sixteen',
//     'seventeen',
//     'eightteen',
//     'nineteen',
//   ];

//   const numberArrHigh = [
//     'twenty',
//     'thirty',
//     'fourty',
//     'fifty',
//     'sixty',
//     'seventy',
//     'eighty',
//     'ninety',
//   ];

//   let sortingArr = [];

//   for (let i = 0; i < ary.length; i++) {
//     if (ary[i] < 20) {
//       sortingArr.push([numberArrLow[ary[i]], ary[i]]);
//       // console.log(sortingArr[i]);
//     } else if (20 <= ary[i] && ary[i] < 100) {
//       let digit = parseInt(ary[i].toString().split('')[1]);
//       let remainder = Math.floor(ary[i] / 10) - 2;

//       if (digit === 0) {
//         sortingArr.push([numberArrHigh[remainder], ary[i]]);
//       } else {
//         sortingArr.push([
//           numberArrHigh[remainder] + ' ' + numberArrLow[digit],
//           ary[i],
//         ]);
//       }
//       // console.log(sortingArr[i]);
//     } else if (100 <= ary[i] && ary[i] < 1000) {
//       let digitLow = parseInt(ary[i].toString().split('')[2]);
//       let digitMid = parseInt(ary[i].toString().split('')[1]) - 2;
//       let digitHigh = parseInt(ary[i].toString().split('')[0]);

//       if (digitLow === 0) {
//         sortingArr.push([
//           numberArrLow[digitHigh] + ' hundred ' + numberArrHigh[digitMid],
//           ary[i],
//         ]);
//       } else {
//         sortingArr.push([
//           numberArrLow[digitHigh] +
//             ' hundred and ' +
//             numberArrHigh[digitMid] +
//             ' ' +
//             numberArrLow[digitLow],
//           ary[i],
//         ]);
//       }
//       // console.log(sortingArr[i]);
//     }
//   }

//   sortingArr.sort((a, b) => (a[0] >= b[0] ? 1 : -1));

//   let result = sortingArr.map((el) => {
//     return el[1];
//   });

//   return result;
// }

// Correct Answer
const sortByName = arr => {
  const words = {};
  arr.forEach(n => words[n] = num2word(n));
  return arr.sort((a, b) => words[a].localeCompare(words[b]));
};

function num2word(n){
  var a = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  var b = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
  if (n >= 0 && n < 20) return a[n];
  if (n >= 20 && n < 100) return b[Math.floor(n / 10) - 2] + (n % 10 ? '-' + a[n % 10] : '');
  if (n >= 100 && n < 1000) return a[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + num2word(n % 100) : '');
  return num2word(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + num2word(n % 1000) : '');
}

console.log(sortByName([9, 99, 999]));
