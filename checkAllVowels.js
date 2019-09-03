function checkAllVowels(str) {
    var vowels = ['a','i','u','e','o'];
    for(var i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) == -1) {
            return false;
        }
    }
    return true;
}

console.log(checkAllVowels('aiueo')) // true
console.log(checkAllVowels('lol')); // false
console.log(checkAllVowels('aiueob')); // false
console.log(checkAllVowels('ei')) // true