function checkVowel(str){
    var vokal = ['a', 'i', 'u', 'e', 'o']
    
    for( var i = 0; i < str.length; i++){
        var temp = false
        for( var j = 0; j < vokal.length; j++){
            if(str[i] == vokal[j]){
                temp = true
            }
        }
        if(temp == false){
            return false
        }
    }
    return true
}

console.log(checkVowel('abcde'));
console.log(checkVowel('aiueo'));