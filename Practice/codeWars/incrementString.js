function incrementString (strng) {
  // checks if string is empty
  if (strng === '') {
    return '1'
  }

  // regex for word and number
  const regex = /[0-9]/g
  const regex2 = /[^0-9]/g
  
  // puts number into an array and removes the word from the string
  let numberArr = strng.match(regex)
  let word = ''
  if (regex2.test(strng)) {
    word = strng.match(regex2).join('')
  }
  let number = 1

  // checks the length of the number with zeros vs without + 1 and adds zeros accordingly
  if (numberArr) {
    const numArrLength = numberArr.length
    const num = parseInt(numberArr.join('')) + 1
    const numLength = num.toString().split('').length
    if (numLength > numArrLength) {
      word += num
    } else {
      zero = '0'
      word += zero.repeat(numArrLength - numLength) + num
    }
  } else {
    return word + number
  }
  
  return word
}

console.log(incrementString("foobar0099"))

// Best Answer

// /(^9+$)/ 
// regex3.test(numberArr.join(''))