function vokal (str){
    arr = ["a", "i", "u" , "e", "o"]
    for(var i = 0 ; i<str.length ; i++){
        if (arr.indexOf(str[i].toLowerCase()) == -1){
            return false
        }
    }
    return true
}

console.log(vokal('aiueo')); //true
console.log(vokal('AIUEO')); //true
console.log(vokal('ABICUDEFOG')); //true
console.log(vokal('abicudefog')); //false
console.log(vokal('bcdfg')); //false