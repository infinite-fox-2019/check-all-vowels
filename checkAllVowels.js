function checkVowel(str) {
    str = str.toLowerCase().split('')
    for (var i=0; i<str.length; i++) {
        if (!isVocal(str[i])) return false
    }
    return true
}

function isVocal(char) {
    var refer = ['a','i','u','e','o']
    if (refer.includes(char)) return true
    return false
}

console.log(checkVowel('aaaaAi'))
console.log(checkVowel('babiBu'))
