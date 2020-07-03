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



var moveZeros = function (arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        el = arr[i];
        if (el === 0) {
            newArr.push(el);
        } else {
            newArr.unshift(el);
        };
    };
    return newArr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
