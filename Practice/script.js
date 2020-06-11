// console.log('Hello World!')



// function ensure(value) {
//     if(value === undefined) {
//       throw new Error('no arguments');
//     }
  
//     return value;
//   }
  
//   try {
//     console.log(ensure());
//   } catch(err) {
//     console.log(err);
//   }



// function removeProperty(obj, prop) {
//     keys = []
//     for (let key in obj) {
//       if (key === prop) {
//         delete obj[prop]
//         return true
//       }
//     }
//     return false
//   }



// function formatDate(userDate) {
//     // format from M/D/YYYY to YYYYMMDD
//     let arr = userDate.split('/')
//     if (arr[0].length === 1) {
//       arr[0] = '0' + arr[0]
//     }
//     if (arr[1].length === 1) {
//       arr[1] = '0' + arr[1]
//     }
//     return `${arr[2]}${arr[0]}${arr[1]}`
//   }
  
//   console.log(formatDate("12/31/2014"));



// function setup() {
//     let btnRemove = document.querySelectorAll('.remove')
//     // console.log(btnRemove)
//     btnRemove.forEach(i => {
//         i.addEventListener('click', event => {
//             i.parentNode.remove();
//         })
//     })
// }

// setup();



// function createCheckDigit(membershipId) {
//     if (membershipId.length === 1) {
//         return membershipId;
//     } else {
//         let arr = membershipId.split('');
//         console.log(arr)
//         let result = 0;
//         for (let x = 0; x < arr.length; x++) {
//             result += parseInt(arr[x])
//         }
//         console.log(result)
//         return createCheckDigit(result.toString());
//     }
// }
  
// console.log(createCheckDigit("55555"));



// function registerHandlers() {
//     var as = document.getElementsByTagName('a');
//     for (var i = 0; i < as.length; i++) {
//         as[i].onclick = (function(index) {
//             return function() {
//                 alert(index);
//                 return false;
//             }
//         }(i))
//     }
// }



// function appendChildren(decorateDivFunction) {
//     var allDivs = document.getElementsByTagName("div");
  
//     for (var i = 0; i < allDivs.length; i++) {
//         var newDiv = document.createElement("div");
//         decorateDivFunction(newDiv);
//         allDivs[i].appendChild(newDiv);
//     }
// }



// function showCustomers(customers, targetList) {
//     for (let i = 0; i < customers.length; i++) {
//         let li = document.createElement('li');

//         let name = document.createElement('p');
//         name.innerHTML = customers[i].name
//         let email = document.createElement('p');
//         email.innerHTML = customers[i].email
        
//         li.appendChild(name)
        
//         name.addEventListener('click', function() {
//             if (li.contains(email)) {
//                 li.remove(email)
//             } else {
//                 li.appendChild(email)
//             }
//         })

//         targetList.appendChild(li);
//     }
//   }
  
//   document.body.innerHTML = `
//   <div>
//     <ul id="customers">
//     </ul>
//   </div>
//   `;
//   let customers = [{name: "John", email: "john@example.com"},
//                    {name: "Mary", email: "mary@example.com"}];
//   showCustomers(customers, document.getElementById("customers"));
  
//   let customerParagraph = document.querySelectorAll("li > p")[0];
//   if(customerParagraph) {
//     customerParagraph.click();
//   }
//   console.log(document.body.innerHTML);

// function fizzBuzz(n) {
//     // Write your code here
//     for (let i = 1; i <= n; i++) {
//         if (i%3 === 0 && i%5 === 0) {
//             console.log('FizzBuzz')
//         } else if (i%3 === 0) {
//             console.log('Fizz')
//         } else if (i%5 === 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }
// function main() {
//     // const n = parseInt(readLine().trim(), 10);

//     fizzBuzz(10);
// }

// main();

// function calculate_coffee_stats(office_stats_list) {
//     // 
//     console.log(office_stats_list)
//     let = arr = []
//     for (let i = 0; i < office_stats_list.length; i++) {
//         arr.push(office_stats_list[i].split(','))
//     }
//     let result = []
//     function cacluateArr(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i][0] === null || arr[i][0] !== result[i-1][0]) {
//                 result.push(arr[i][0])
//                 result.push(arr[i][2])
//             } else if (arr[i][0] === result[i-1][0]) {
//                 result.push(arr[i][2] + result[i-1][1])
//             } else {
//                 continue
//             }
//         }
//     }
//     console.log(result)
// }

// list = ['office1,jan,500','office1,feb,30','office1,jan,400','office2,jan,300','office2,jan,30','office2,jan,57']
// calculate_coffee_stats(list)



// function calculate_profit(revenue_and_cost_stats, exchange_rates) {
//     const costStats = revenue_and_cost_stats.split(',');
//     let exchangeRates = []
//     for (let i = 0; i < exchange_rates.length; i++) {
//         exchangeRates.push(exchange_rates[i].split(','))
//     }
//     console.log(costStats);
//     console.log(exchangeRates);
//     costStats[0] = costStats[0].substr(0,10);
//     console.log(costStats);
//     for (let i = 0; i < exchangeRates.length; i++) {
//         if (exchangeRates[i] === costStats[4]) {
            
//         }
//     }
// }

// calculate_profit('2019-03-20T22:32:04+13:00,40345.23,NZD,23983.23,AUD', ['AUD,2019-03-31,1.063103',
// 'AUD,2019-04-01,1.042530'])



