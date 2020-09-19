// OBJECTS
// const Person = function(name, yob, job) {
//   this.name = name;
//   this.yob = yob;
//   this.job = job;
//   // this.calculateAge = () => {
//   //   console.log(2020 - this.yob)
//   // }
// };

// Person.prototype.calculateAge = function() {
//   console.log(2020 - this.yob)
// }

// const john = new Person('john', 1990, 'Teacher')

// john.calculateAge()

//Class functions
// const years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   let arrRes = [];
//   for (i in arr) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2020 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// const ages = arrayCalc(years, calculateAge);
// const fullAges = arrayCalc(ages, isFullAge)
// console.log(ages)
// console.log(fullAges)

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log('hello ' + name + ' you are a designer')
//     }
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log('hello ' + name + ' you are a teacher')
//     }
//   } else {
//     return function(name) {
//       console.log('hello ' + name + ' what do you do?')
//     }
//   }
// }

// const teacherQuestion = interviewQuestion('teacher')
// teacherQuestion('john')

// const designerQuestion = interviewQuestion('designer')('jane')

//IIFE
// function game() {
//   let score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// (function () {
//   let score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// (function (goodluck) {
//   let score = Math.random() * 10;
//   console.log(score >= 5 - goodluck);
// })(5);

//CLOSURES
// function retirement(retirementAge) {
//   const a = ' years left until retirement.';
//   return function (yob) {
//     const age = 2020 - yob;
//     console.log(retirementAge - age + a);
//   };
// }

// const retitementNZ = retirement(67)(1990);
// const retirementGermany = retirement(65)(1990);

// BIND, CALL AND APPLY
// const john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ' Ladies and gentalmen my name is ' + this.name + ' I am a ' + this.job + ' and I\'m ' + this.age)
//     } else if (style === 'friendly') {
//       console.log('Good ' + timeOfDay + ' Friends ' + this.name + ' I am a ' + this.job + ' and I\'m ' + this.age)
//     }
//   }
// }

// john.presentation('formal', 'morning')

// const emily = {
//   name: 'emily',
//   age: 35,
//   job: 'designer'
// }

// john.presentation.call(emily, 'friendly', 'afternoon')
// // john.presentation.apply(emily, 'friendly', 'afternoon')
// const johnFriendly = john.presentation.bind(john, 'friendly')
// johnFriendly('morning')
// johnFriendly('night')

//CODING CHALLENGE
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct
}

const question = ['whats my name?', 'how old am I?', 'am I cool?'];
const answers = {
  0: ['harrison', 'max', 'tom'],
  1: ['23', '22', '21'],
  2: ['very cool', 'lame']
}
const correct = [0, 1, 0]
let random = Math.floor(Math.random() * 3)

Question.prototype.displayResult = function() {
  this.answers.forEach((el, i) => console.log(i + ': ' + el))
  let userAnswer = prompt(this.question)
  if (userAnswer == this.correct) {
    console.log('Correct!')
  } else {
    console.log('Wrong!')
  }
}

const display = new Question(question[random], answers[random], correct[random])
display.displayResult();