// My attempt
// function phone(strng, num) {
//   const stringArr = strng.split('\n');
//   let test = [];
//   let result = {
//     phone: 'a',
//     name: '',
//     address: '',
//   };
//   const regexNum = new RegExp(num, 'g'); // let regexNum = /(48-421-674-8974)/g;

//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i].match(regexNum)) {
//       test.push(stringArr[i]);
//     }
//   }

//   if (test.length > 1) {
//     return 'Error => Too many people: num';
//   } else if (test.length < 1) {
//     return 'Error => Not found: num';
//   }

//   const regexName = /\<(.*?)\>/g;
//   const regexAddress = /[<>+?;]/g;
//   let stringResult = test[0];
//   const resultArr = stringResult.split(' ');
//   //result.name = stringResult.match(regexName)[0];
//   result.phone = stringResult.match(regexNum)[0];

//   let address = [];
//   let name = []

//   for (let i = 0; i < resultArr.length; i++) {
//     if (!resultArr[i].match(regexAddress) && resultArr[i] !== '') {
//       address.push(resultArr[i])
//     } else if (resultArr[i].match(regexAddress) && resultArr[i] !== '' && !resultArr[i].match(regexNum)) {
//       name.push(resultArr[i])
//     }
//   }

//   result.address = address.join(' ')
//   result.name = name.join(' ')
//   console.log(result.name)
//   name = '';

//   for (let i = 0; i < result.name.length; i++) {
//     if (i === 0 || i === result.name.length - 1) {
//       console.log(result.name[i])
//       name += '';
//     } else {
//       name += result.name[i];
//     }
//   }

//   return `Phone => ${result.phone}, Name => ${name}, Address => ${result.address}`;
// }

const dr =
  '/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n' +
  '+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n' +
  '+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n' +
  '+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n' +
  '<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n' +
  '<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n' +
  "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n" +
  '<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n' +
  '<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernar   d Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n' +
  '+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n' +
  '<P Salinge> Main Street, +1-098-512-2222, Denve\n';



// let regex = /(48-421-674-8974)/g
// let string = '"<Anastasia> +48-421-674-8974 Via Quirinal Roma'

// if (string.match(regex)) {
//   console.log('yes')
// }

// strng = ' hi  p '

// console.log(strng.replace(' ', ''))

// Correct answer
const phone = (a, b) => {
  a = a.split("\n").filter(x => x.includes(b))
  if (a.length > 1) return "Error => Too many people: " + b
  if (a.length < 1) return "Error => Not found: " + b
  let name = a[0].match(/<.+>/)[0].slice(1, -1)
  let address = a[0].replace(/<.+>|\+\d\d?-(\d{3}-){2}\d{4}|[;$*/?,:!]/g, "").replace(/_| +/g, " ")
  return `Phone => ${b}, Name => ${name}, Address => ${address.trim()}`
}

console.log(phone(dr, '1-498-512-2222'));