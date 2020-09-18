// My attmept
// function checkCashRegister(price, cash, cid) {
//   const amounts = [
//     ['PENNY', .01],
//     ['NICKEL', .05],
//     ['DIME', .1],
//     ['QUARTER', .25],
//     ['ONE', 1],
//     ['FIVE', 5],
//     ['TEN', 10],
//     ['TWENTY', 20],
//     ['ONE HUNDRED', 100],
//   ];

//   let totalAmountInCid = cid.reduce((acc, cur) => {
//     return acc + cur[1];
//   }, 0)
//   totalAmountInCid = Math.round(totalAmountInCid * 100) / 100

//   let amountNeeded = cash - price;

//   if (amountNeeded > totalAmountInCid) {
//     return {status: "INSUFFICIENT_FUNDS", change: []}
//   } else if (amountNeeded === totalAmountInCid) {
//     return {status: "CLOSED", change: [totalAmountInCid]}
//   }

//   console.log(amountNeeded)

//   let result = []
//   while (amountNeeded >= 0) {
//     if (amountNeeded >= 100 && cid[8][1] > 0) {
//       amountNeeded += -100
//       cid[8][1] += -100
//       result['ONE HUNDRED'] ? result['ONE HUNDRED'] += 100 : result['ONE HUNDRED'] = 100
//       // console.log(result['ONE HUNDRED'])
//       continue
//     } else if (amountNeeded >= 20 && cid[7][1] > 0) {
//       amountNeeded += -20
//       cid[7][1] += -20
//       result['TWENTY'] ? result['TWENTY'] += 20 : result['TWENTY'] = 20
//       // console.log(result['TWENTY'])
//       continue
//     } else if (amountNeeded >= 10 && cid[6][1] > 0) {
//       amountNeeded += -10
//       cid[6][1] += -10
//       result['TEN'] ? result['TEN'] += 10 : result['TEN'] = 10
//       // console.log(result['TEN'])
//       continue
//     } else if (amountNeeded >= 5 && cid[5][1] > 0) {
//       amountNeeded += -5
//       cid[5][1] += -5
//       result['FIVE'] ? result['FIVE'] += 5 : result['FIVE'] = 5
//       // console.log(result['FIVE'])
//       continue
//     } else if (amountNeeded >= 1 && cid[4][1] > 0) {
//       amountNeeded += -1
//       cid[4][1] += -1
//       result['ONE'] ? result['ONE'] += 1 : result['ONE'] = 1
//       // console.log(result['ONE'])
//       continue
//     } else if (amountNeeded >= 0.25 && cid[3][1] > 0) {
//       amountNeeded += -0.25
//       cid[3][1] += -0.25
//       result['QUARTER'] ? result['QUARTER'] += 0.25 : result['QUARTER'] = 0.25
//       // console.log(result['QUARTER'])
//       continue
//     } else if (amountNeeded >= 0.1 && cid[2][1] > 0) {
//       amountNeeded += -0.1
//       cid[2][1] += -0.1
//       result['DIME'] ? result['DIME'] += 0.1 : result['DIME'] = 0.1
//       // console.log(result['DIME'])
//       continue
//     }  else if (amountNeeded >= 0.05 && cid[1][1] > 0) {
//       amountNeeded += -0.05
//       cid[1][1] += -0.05
//       result['NICKEL'] ? result['NICKEL'] += 0.05 : result['NICKEL'] = 0.05
//       console.log(result['NICKEL'])
//       continue
//     } else if (amountNeeded >= 0.01 && cid[0][1] > 0) {
//       console.log(amountNeeded)
//       amountNeeded += -0.01
//       cid[0][1] += -0.01
//       result['PENNY'] ? result['PENNY'] += 0.01 : result['PENNY'] = 0.01
//       //console.log(result['PENNY'])
//       continue
//     }
//     break
//   }

//   return result
// }

// Correct answer
const REGISTER_STATUS = {
  closed: 'CLOSED',
  insufficientFunds: 'INSUFFICIENT_FUNDS',
  open: 'OPEN',
};

function checkCashRegister(price, cash, cid) {
  let cashRegister = { status: '', change: cid };
  const changeNeeded = parseFloat(cash - price).toFixed(2);
  const changeAvailable = getTotalCashRegisterChange(cid);
  cashRegister.status = getTotalCashRegisterStatus(
    changeNeeded,
    changeAvailable
  );

  if (cashRegister.status === REGISTER_STATUS.insufficientFunds) {
    cashRegister.change = [];
    return cashRegister;
  }

  cashRegister.change = getCustomersChange(changeNeeded, cid);

  if (changeNeeded > getTotalCashRegisterChange(cashRegister.change)) {
    cashRegister.status = REGISTER_STATUS.insufficientFunds;
    cashRegister.change = [];
  }

  if (cashRegister.status === REGISTER_STATUS.closed) {
    cashRegister.change = [...cid]
  }

  return cashRegister
}

const getTotalCashRegisterChange = (changeInDrawer) => {
  let total = 0;
  for (let change of changeInDrawer) {
    total += change[1];
  }
  return total.toFixed(2);
};

const getTotalCashRegisterStatus = (changeNeeded, changeAvailable) => {
  if (Number(changeNeeded) > Number(changeAvailable)) {
    return REGISTER_STATUS.insufficientFunds;
  }
  if (Number(changeNeeded) < Number(changeAvailable)) {
    return REGISTER_STATUS.open;
  }
  return REGISTER_STATUS.closed;
};

const getCustomersChange = (changeNeeded, cid) => {
  let change = [];
  const amounts = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  };

  for (let i = cid.length - 1; i >= 0; i--) {
    const coinName = cid[i][0];
    const coinTotal = cid[i][1];
    const coinValue = amounts[coinName];
    let coinAmount = (coinTotal / coinValue).toFixed(2);
    let coinsToReturn = 0;
    
    while (changeNeeded >= coinValue && coinAmount > 0) {
      changeNeeded -= coinValue;
      changeNeeded = changeNeeded.toFixed(2);
      coinAmount--;
      coinsToReturn++;
    }

    if (coinsToReturn > 0) {
      change.push([coinName, coinsToReturn * coinValue]);
    }
  }

  return change
};

console.log(
  checkCashRegister(19.4, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
