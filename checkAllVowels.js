function checkVocal (str) {
    var arr_vocal = ['a', 'i', 'u', 'e', 'o']
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < arr_vocal.length; j++) {
            if (str[i] === arr_vocal[j]) {
                count++
            }
        }
    }
    if (count === str.length) {
        return true
    } else {
        return false
    }
}

console.log(checkVocal('aie'));
console.log(checkVocal('Muhammad'));
console.log(checkVocal('Rizki'));
console.log(checkVocal('Aiman'));
console.log(checkVocal('bcd'));



