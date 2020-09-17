function palindrome(str) {
  const clearnStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  return clearnStr.split('').reverse().join('') === clearnStr ? true : false
}

console.log(palindrome("race car"));