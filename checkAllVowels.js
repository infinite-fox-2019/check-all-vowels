function checkAllVowels(str) {
    vocals = ['a', 'i', 'u', 'e', 'o'];
    
    for (var i = 0; i < str.length; i++) {
        cek = false;
        for (var j = 0; j < vocals.length; j++) {
            if (str[i] == vocals[j]) {
                cek = true;
            }
        }
        if (!cek) {
            return false;
        }
    }
    return true;
}

console.log(checkAllVowels('aaiueeeoooobaaa'));
