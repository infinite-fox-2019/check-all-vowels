function thereIsVowels(string){
    var vowels = 'aiueo'
    for (var i=0; i<string.length; i++) {
        var isFind = false
        for (var j=0; j<vowels.length; j++) {
            if (vowels[j] === string[i]) {
                isFind = true
            }
        } 
        if ( isFind === false) {
            return false
        }
        
    }
    return true

    // var vowels = ['a', 'i', 'u', 'e', 'o']

    // for (var i=0; i<string.length; i++) {
    //     if (vowels.indexOf(string[i]) === -1) {
    //         return false
    //     }
    // }
    // return true

}
console.log(thereIsVowels('wwwww')); //false
console.log(thereIsVowels('aaaaa')); //true
console.log(thereIsVowels('poiuytrewq')); //false
console.log(thereIsVowels('alkjhgfds')); //false
console.log(thereIsVowels('mnbvcxz')); 
//false
