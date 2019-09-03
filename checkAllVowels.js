function checkVowel(str) {
    var data = ['a','i','u','e','o', ' '];

    for(var i = 0; i<str.length; i++){
        var isSame = false;
        for(var j = 0; j<data.length; j++){
            if(str[i] == data[j]){
                break;
            }
            else if(j == data.length -1 && isSame == false){
                return false;
            }
        }
    }
    return true;
}

console.log(checkVowel('andi'));
console.log(checkVowel('aiueo'));
console.log(checkVowel('aiueo andi'));
