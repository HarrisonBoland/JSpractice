// My solution got deleted but I used recursion which timed out the code

// Correct Solution
var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}

console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10))




// let seen = {}

// seen[1] = true

// console.log(seen)