function checkVowel (string){
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  var vowelUpper = []
  for(i=0 ; i<vowel.length ; i++){
    vowelUpper.push(vowel[i].toUpperCase())
  }

  for(i=0 ; i<string.length ; i++){
    for(j=0 ; j<vowel.length ; j++){
      if(vowel.includes(string[i]) === false){
        return false
      }
    }
  }
  return true
}

console.log(checkVowel('favorite'))
console.log(checkVowel('aeiou'))
console.log(checkVowel('aeih'))


