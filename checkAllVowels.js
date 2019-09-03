
function CheckVowel(str) {
    let lib = ['a', 'i', 'u', 'e', 'o']

    for (let i = 0; i < lib.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (lib[i] === str[j]) return true
        }

    }
    return false

}


console.log(CheckVowel('uzai'));//true
console.log(CheckVowel('adavowel'));//true
console.log(CheckVowel('mknmknn'));//false
console.log(CheckVowel('true'));//true
console.log(CheckVowel('kjkjkj'));//false
console.log(CheckVowel('uoas'));//true