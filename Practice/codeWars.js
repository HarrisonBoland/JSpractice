// function solution(number){
//     const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
//     let result = '';

//     let  pos0, pos1, pos2, numString;
//     numString = number.toString();
//     pos0 = 0;
//     pos1 = 1;
//     pos2 = 2;

//     for (let i = numString.length - 1; i >= 0; i--) {
//         let num, res, roundRes;
//         num = parseInt(numString[i]);
//         res = result;
//         roundRes = '';
//         result = '';
//         if (numString.length === 4 && i === 0) {
//             roundRes = romanNumerals[6].repeat(num);
//             result = roundRes.concat(res);
//         } else if (num === 1 || num === 2 || num === 3) {
//             roundRes = romanNumerals[pos0].repeat(num);
//             result = roundRes.concat(res);
//         } else if (num === 4) {
//             roundRes += romanNumerals[pos0] + romanNumerals[pos1];
//             result = roundRes.concat(res);
//         } else if (num === 5) {
//             roundRes += romanNumerals[pos1];
//             result = roundRes.concat(res);
//         } else if (num === 6 || num === 7 || num === 8) {
//             roundRes += romanNumerals[pos1] + romanNumerals[pos0].repeat(num - 5);
//             result = roundRes.concat(res);
//         } else if (num === 9) {
//             roundRes += romanNumerals[pos0] + romanNumerals[pos2];
//             result = roundRes.concat(res);
//         } else if (num === 0) {
//             roundRes += '';
//             result = roundRes.concat(res);
//         };
//         pos0 = pos0 + 2;
//         pos1 = pos1 + 2;
//         pos2 = pos2 + 2;
//     };
//     return result;
// };

// console.log(solution(101));

// function isPrime(num) {
//     const root = Math.sqrt(num);
//     if (num >= 2) {
//         for (let i = 2; i <= root; i++) {
//             if (num % i === 0) {
//                 return false;
//             };
//         };
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPrime(-5))

// function narcissistic(value) {
//     const valueArr =  value.toString().split('');
//     let result = 0;
//     for (let i = 0; i < valueArr.length; i++) {
//         result += Math.pow(valueArr[i], valueArr.length);
//     };
//     return result === value;
// };

// console.log(narcissistic(153));

// function sortArray(array) {
//     // Split array into odd numbers and save positions of even numbers
//     pos = [];
//     neg = [];
//     res = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             pos.push(i);
//         } else {
//             neg.push(array[i]);
//         };
//     };

//     // Sort negative array accending
//     neg.sort((a,b)=>a-b);

//     // Combine arrays into result
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (i === pos[count]) {
//             res.push(array[pos[count]]);
//             count ++;
//         } else {
//             res.push(neg[0]);
//             neg.shift();
//         };
//     };

//     return res;
// };

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// COULDN"T DO
// function zero() {}
// function one() {}
// function two() {}
// function three() {}
// function four() {}
// function five() {}
// function six() {}
// function seven() {}
// function eight() {}
// function nine() {}

// function plus() {}
// function minus() {}
// function times() {}
// function dividedBy() {}

// function toWeirdCase(string){
//     newString = ''

//     i = 0
//     string.split('').forEach((el) => {
//         if (el === ' ') {
//             newString += el
//             i = 0
//         } else if (i % 2 === 0) {
//             newString += el.toUpperCase();
//             i ++
//         } else {
//             newString += el.toLowerCase();
//             i ++
//         };
//     });

//     return newString;
// }

// console.log(toWeirdCase('hi Man how is it going'));

// function wave(str) {
//     arr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             continue
//         } else {
//             stringArr = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1)
//             arr.push(stringArr);
//         }
//     };
//     return arr;
// }

// console.log(wave('hello buddy'))

// function pigIt(str){
//     strArr = str.split(' ');
//     pigItStr = ''
//     for (let index = 0; index < strArr.length; index++) {
//         el = strArr[index];
//         console.log(el)
//         pigItStr += el.substr(1);
//         pigItStr += el[0];
//         if (el !== '!' && el !== '?') {
//             pigItStr += 'ay';
//         };
//         if (index < strArr.length - 1) {
//             pigItStr += ' ';
//         };
//     };
//     return(pigItStr);
// }

// console.log(pigIt('Hello World ?'));

// var moveZeros = function (arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         el = arr[i];
//         if (el === 0) {
//             newArr.push(el);
//         } else {
//             newArr.unshift(el);
//         };
//     };
//     return newArr;
// }

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

// function generateHashtag (str) {
//     const strArr = str.split(' ');
//     let newStr = '#';
//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr[i] === '') {
//             continue;
//         } else {
//             newStr += strArr[i].substr(0, 1).toUpperCase();
//             newStr += strArr[i].substr(1);
//         };
//     };
//     if (newStr.length <= 1) {
//         return false;
//     } else if (newStr.length > 140) {
//         return false;
//     } else {
//         return newStr;
//     };
// }

// console.log(generateHashtag(''))

// function humanReadable(seconds) {
//     let time = ['00','00','00'];
//     time[2] = seconds % 60;
//     time[1] = Math.floor((seconds / 60) % 60);
//     time[0] = Math.floor(seconds / 60 / 60);
//     for (let i = 0; i < time.length; i++) {
//         if (time[i] < 10) {
//             time[i] = '0' + time[i];
//         };
//     };
//     return time.join(':');
//   }

//   console.log(humanReadable(86349))

// function josephus(items, k){
//     k -= 1
//     let count = k
//     let newArr = [];
//     while (items.length > 0) {
//         if (items.length === 1) {
//             newArr.push(items[0]);
//             return newArr;
//         }
//         newArr.push(items[count]);
//         items.splice(count, 1);
//         console.log(items.length, count);
//         for (let i = 0; i < k; i++) {
//             if (count === items.length) {
//                 count = 1;
//             } else {
//                 count++
//             }
//         }

//         console.log(items , count, items[count]);
//     };
//   }

// console.log(josephus([1,2,3,4,5,6,7,8,9,10],2));

// function loop_size(node){
//     // LEARN HOW TO WRITE A LINKED LIST
// }

// console.log(loop_size())

// function rgb(r, g, b){
//     const decArr = [r, g, b];
//     const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//     let hexArr = [];
//     for(let i = 0; i < decArr.length; i++) {
//         let hexValue, dec, remainder, divisor;
//         dec = decArr[i];

//         if (dec < 0) {
//             dec = 0;
//         } else if (dec > 255) {
//             dec = 255;
//         };

//         divisor = Math.floor(dec / 16);
//         remainder = Math.floor(dec % 16);

//         hexValue = hex[divisor] + hex[remainder];

//         hexArr.push(hexValue);
//     };

//     return hexArr.join('');
// }

// console.log(rgb(86, 14, 2));

// function firstNonRepeatingLetter(s) {
//     let lowerCaseArray = s.toLowerCase().split('').sort()
//     let countArray = [];
//     let count = 0

//     for (let i = 0; i < lowerCaseArray.length; i++) {

//     };

//     return countArray;
// };

// console.log(firstNonRepeatingLetter('sTress'))

// function domainName(url) {
//   let urlArr = url.split(/[./:]/);

// 	if (urlArr[0] === 'http') {
// 		urlArr.splice(urlArr.indexOf('http'), 1);
// 	} else if (urlArr[0] === 'https') {
// 		urlArr.splice(urlArr.indexOf('https'), 1);
// 	}
//   urlArr.splice(urlArr.indexOf('www'), 1);

//   let results = [];
//   for (let i = 0; i < urlArr.length; i++) {
//     if (urlArr[i] !== '') {
//       results.push(urlArr[i]);
//     }
//   }

//   return results[0];
// }

// console.log(domainName('https://google.com'));

// function pickPeaks(arr) {
//   let peaksObj = {
//     pos: [],
//     peaks: [],
//   };

// 	let prevNode = 0;
// 	let highNode = 0;
// 	let highNodePos = 0
//   for (let i = 0; i < arr.length; i++) {
//     prevNode = arr[i - 1];
//     if (i === 0) {
//       prevNode = arr[i];
//     } 

// 		if (arr[i] > prevNode) {
// 			highNode = arr[i]
// 			highNodePos = i
// 		}

//     if (arr[i] < highNode) {
//       peaksObj.pos.push(highNodePos);
// 			peaksObj.peaks.push(arr[highNodePos]);
// 			highNode = 0
// 			highNodePos = 0
// 		}
// 		//console.log(i, highNode, prevNode)
//   }

//   return peaksObj;
// }

// console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));
// THE ANSWER
// function pickPeaks(arr){
//   var result = {pos: [], peaks: []};
//   if(arr.length > 2) {
//     var pos = -1;
//     for(var i=1; i<arr.length;i++){
//       if(arr[i] > arr[i-1]) {
//         pos = i;
//       } else if(arr[i] < arr[i-1] && pos != -1) {
//         result.pos.push(pos);
//         result.peaks.push(arr[pos]);
//         pos = -1;
//       }
//     }
//   }
//   return result;
// }
