
function isVowel(letter) {
    letter = letter.toUpperCase()
    let vowels = ['A', 'I', 'U', 'E', 'O']
    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true
        }
    }
    return false
}

function checkVowels(string) {
    for (let i = 0; i < string.length; i++) {
        if (!isVowel(string[i])) return false
    }
    return true
}

console.log(checkVowels('shdkgksj')); //false
console.log(checkVowels('aiuaaooo')); //true
console.log(checkVowels('aoioop')); //false
console.log(checkVowels('aiosoo')); //false
console.log(checkVowels('ii')); //true
