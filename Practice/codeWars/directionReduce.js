// My attempt
function dirReduc(arr) {
  let result = [];

  for (i in arr) {
    let lastItem = result[result.length - 1];
    let currentItem = arr[i];
    if (
      (lastItem === 'NORTH' && currentItem === 'SOUTH') ||
      (lastItem === 'SOUTH' && currentItem === 'NORTH') ||
      (lastItem === 'WEST' && currentItem === 'EAST') ||
      (lastItem === 'EAST' && currentItem === 'WEST')
    ) {
      result.pop();
    } else {
      result.push(currentItem);
    }
  }

  return result;
}

// Using reduce
// function dirReduc(plan) {
//   var opposite = {
//     'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//   return plan.reduce(function(dirs, dir){
//       if (dirs[dirs.length - 1] === opposite[dir])
//         dirs.pop();
//       else
//         dirs.push(dir);
//       return dirs;
//     }, []);
// }

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
