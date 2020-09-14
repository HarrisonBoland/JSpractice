// My Attempt
// function workOnStrings(a, b) {
//   let setA = {};
//   let setB = {};
//   let result = '';

//   for (let i = 0; i < a.length; i++) {
//     let char = a.charAt(i).toLowerCase();
//     if (!setA[char]) {
//       setA[char] = true;
//     } else {
//       setA[char] === true ? (setA[char] = false) : (setA[char] = true);
//     }
//   }

//   for (let i = 0; i < b.length; i++) {
//     let char = b.charAt(i).toLowerCase();
//     if (!setB[char]) {
//       setB[char] = true;
//     } else {
//       setB[char] === true ? (setB[char] = false) : (setB[char] = true);
//     }
//   }

//   for (let i = 0; i < a.length; i++) {
//     let char = a.charAt(i);
//     let charLow = a.charAt(i).toLowerCase();
//     if (setB[charLow]) {
//       if (char === charLow) {
//         setB[charLow] === true
//           ? (result += char.toUpperCase())
//           : (result += char);
//       } else {
//         setB[charLow] === true
//           ? (result += charLow)
//           : (result += char);
//       }
//     } else {
//       result += char;
//     }
//   }

//   for (let i = 0; i < b.length; i++) {
//     let char = b.charAt(i);
//     let charLow = b.charAt(i).toLowerCase();
//     if (setA[charLow]) {
//       if (char === charLow) {
//         setA[charLow] === true
//           ? (result += char.toUpperCase())
//           : (result += char);
//       } else {
//         setA[charLow] === true
//           ? (result += charLow)
//           : (result += char);
//       }
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }

// Making it Smaller
function workOnStrings(a, b) {
  let setA = {};
  let setB = {};
  let result = '';

  const occuranceOfChar = (set, string) => {
    for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i).toLowerCase();
      if (!set[char]) {
        set[char] = true;
      } else {
        set[char] === true ? (set[char] = false) : (set[char] = true);
      }
    }
  }

  const convertString = (set, string) => {
    for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      let charLow = string.charAt(i).toLowerCase();
      if (set[charLow]) {
        if (char === charLow) {
          set[charLow] === true
            ? (result += char.toUpperCase())
            : (result += char);
        } else {
          set[charLow] === true
            ? (result += charLow)
            : (result += char);
        }
      } else {
        result += char;
      }
    }
  }

  occuranceOfChar(setA, a);
  occuranceOfChar(setB, b);
  convertString(setB, a);
  convertString(setA, b);

  return result;
}

//

console.log(workOnStrings("abCa", "acde"));
