const checkVowels = str => {
  const vowels = ['a', 'i', 'u', 'e', 'o']

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] == vowels[j]) {
        vowels.splice(j, 1)
      }
    }
  }

  if (!vowels.length) return true
  return false
}

console.log(checkVowels('kevin anantha'))
console.log(checkVowels('hacktiv8'))
console.log(checkVowels('aiueo'))
console.log(checkVowels('auisdfowewo'))
console.log(checkVowels('aaaaiiiuuueeeooo'))
