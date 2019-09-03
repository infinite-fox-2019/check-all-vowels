function checkVowel (str) {
    var kamusVokal = 'aiueo';
    var strToLowerCase = toLowerCase(str);
    var jmlTrue = 0;
    for (var i = 0; i < strToLowerCase.length; i++) {
        for (var j = 0; j < kamusVokal.length; j++){
            if (strToLowerCase[i] === kamusVokal[j]) {
                jmlTrue++
            }
        }
    }
    if (jmlTrue === strToLowerCase.length) {
        return true;
    } else {
        return false;
    }
};

function toLowerCase (str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr +=str[i].toLowerCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};
console.log(checkVowel('aiueo'));
console.log(checkVowel('aaaAiiIiiuUuuEeeeeOoooo'));
console.log(checkVowel('AiUeO'))
console.log(checkVowel('abcdefgh'))
console.log(checkVowel('aaiiueo'))
