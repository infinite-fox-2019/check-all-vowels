function checkVowel(inputString){
    if(!inputString.length)return false
    var vocal = ['a','i','u','e','o']
    vocal = vocal.filter(function(eachVocal){
        return eachVocal === inputString[0]
    })
    // console.log(vocal)
    if(vocal.length)return true
    else return checkVowel(inputString.slice(1))
}

console.log(checkVowel('hsss')) //false
console.log(checkVowel('hsas')) //true
console.log(checkVowel('ssffsis')) //true
console.log(checkVowel('xxxxxpppp')) //false