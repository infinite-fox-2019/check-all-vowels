const checkAllVowels = (str) => {
  const lib = ['a', 'i', 'u', 'e', 'o']
  for (let i = 0; i < str.length; i++) {
    let letter = str[i]
    let allVowel = false 
    for( let j = 0; j < lib.length; j++) {
      let vowel = lib[j]
      if(letter === vowel) allVowel = true
    }
    if(!allVowel) return false
  }
  return true
}

console.log(checkAllVowels('aiueei'))//true
console.log(checkAllVowels('jskjskasd'))//false
console.log(checkAllVowels('ioooiik'))//false
console.log(checkAllVowels('aiioueeioiiio'))