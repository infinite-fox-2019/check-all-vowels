function checkVowel(str) {
    var data = ['a','i','u','e','o'];

    for(var i = 0; i<str.length; i++){
        var isSame = false;
        for(var j = 0; j<data.length; j++){
            if(str[i] == data[j]){
                isSame = true;
                break;
            }
            if(j == str.length -1 && isSame == false){
                return false;
            }
        }
    }
    return true;
}

console.log(checkVowel('aiueo'));
