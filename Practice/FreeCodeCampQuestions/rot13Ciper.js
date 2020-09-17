function rot13(str) {
  const alp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let index = alp.indexOf(str.charAt(i))
    if (index === -1) {
      result += str.charAt(i)
    } else {
      result += alp[(index + 13) % 26]
    }
  }

  return result;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));