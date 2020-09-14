// My Attempt
// function convertQueryToMap(query) {
//   let queryObj = {}
//   const queryByItem = query.split('&')
//   for (let i = 0; i < queryByItem.length; i++) {
//     let queryItem = queryByItem[i].split(/[.=]/);
//     console.log(queryItem)
//     for (let j = 0; j < queryItem.length - 1; j++) {
//       queryObj[queryItem[j]] = queryItem[j + 1]
//     }
//   }

//   return queryObj;
// }

// The correct Solution
// function convertQueryToMap(query) {
//   var obj = {};
//   query.split('&').map(function (params) {
//     var parts = params.split('=');
//     if (!parts[1]) return {};
//     parts[0].split('.').reduce(function (cur, next, i, arr) {
//       if (!cur[next]) cur[next] = {};
//       if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
//       return cur[next];
//     }, obj);
//   });
//   return obj;
// }

// Me Rewriting it
function convertQueryToMap(query) {
  let obj = {};
  query.split('&').forEach(params => {
    let parts = params.split('=');
    if (!parts[1]) return {};
    let objRef = obj
    parts[0].split('.').forEach((element, i, array) => {
      if (i === array.length - 1) {
        objRef[element] = decodeURIComponent(parts[1])
      } else if (!objRef[element]) {
        objRef[element] = {};
      }
      objRef = objRef[element]  
    })
  })

  return obj;
}


console.log(
  convertQueryToMap(
    'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
  )
);
