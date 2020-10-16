// ##########################################
const runAmount = 100; // YOU CAN CHANGE THIS
// ##########################################

function GamblingGen() {
  // #################################
  let pot = 600; // YOU CAN CHANGE THIS
  // #################################

  // Code that calculates percentage change of winning and amount made
  let inAmount = 10;
  while (pot >= 0 && pot <= 700) {
    let randInt = Math.floor(Math.random() * 37);
    if (randInt === 0) {
      // console.log('0')
      pot -= inAmount;
      inAmount = inAmount * 2;
    } else if (randInt % 2 === 1) {
      // RED
      // console.log('RED')
      pot -= inAmount;
      inAmount = inAmount * 2;
    } else if (randInt % 2 === 0) {
      // Blackss
      // console.log('BLACK')
      pot += inAmount;
      inAmount = 10;
    }
    pot += 1;
    // console.log(pot)
  }
  if (pot >= 400) {
    return true;
  } else {
    return false;
  }
}

let count = 0;
let totalAmount = 0;
for (let i = 0; i < runAmount; i++) {
  let rate = GamblingGen();

  if (rate === true) {
    count += 1;
  }

  if (rate === true) {
    totalAmount += 100;
    // console.log(totalAmount)
  } else {
    totalAmount -= 600;
    // console.log(totalAmount)
  }
}

console.log(`%${count / (runAmount / 100)}`);
console.log(totalAmount);
