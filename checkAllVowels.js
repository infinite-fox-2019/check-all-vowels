var vowels = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'};

function checkAllVowels(str) {
    if(str === '') {
        return false;
    }
    for(var i = 0; i < str.length; i++) {
        if(!vowels[str[i]]) {
            return false;
        }
    }
    return true;
}

console.log(checkAllVowels('aiueoaiueo')) //TRUE
console.log(checkAllVowels('wyvyrn')) //FALSE
console.log(checkAllVowels('euibiue')) //FALSE
console.log(checkAllVowels('ie')) //TRUE
console.log(checkAllVowels('a')) //TRUE
console.log(checkAllVowels('')) //FALSE
