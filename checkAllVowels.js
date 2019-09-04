function checkVowel (str){
    var lib = ['a','i','u','e','o'];
    for(var i = 0; i < str.length; i++) {
        if (lib.indexOf(str[i]) === -1) {
            return false;
        }
    }
    return true;
}
console.log(checkVowel('aaaa'));
console.log(checkVowel('adaaa'));