function checkAllVowels(str){
    var vocal = ['a','i','u','e','o'];
    for(var i = 0 ; i<str.length ; i++){
        if (vocal.indexOf(str[i].toLowerCase()) == -1){
            return false
        }
    }
    return true;
}

console.log(checkAllVowels('aiiie'))
console.log(checkAllVowels('bhako'))
console.log(checkAllVowels('iiaueo'))
console.log(checkAllVowels('auUEO'))
console.log(checkAllVowels('aBIEOe'))
