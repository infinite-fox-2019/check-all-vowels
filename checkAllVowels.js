function checkAllVowels (str) {
    let alpha = 'aiueo';
    for (let i = 0;i<str.length;i++){
        let s = 0;
        for (let j = 0;j<alpha.length;j++) {
            if (str[i].toLowerCase() === alpha[j]) {
                s++
            }
        }
        if (s == 0) {
            return false;
        }
    }
    return true;

}//endfunction


console.log(checkAllVowels('erdfhkjahhk'));
console.log(checkAllVowels('aaaiiieeeuuuu'));
console.log(checkAllVowels('aaaaaaaaaaaaaaa'));
console.log(checkAllVowels('auxxuauauauauauaa'))
console.log(checkAllVowels('aiueo'))
