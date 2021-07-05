function checkVowels (input) {
    var vowels = 0
    var nonVowels = 0
    for(let i=0; i<input.length; i++){
        if(input[i] === 'a' || input[i] === 'i' || input[i] === 'u' || input[i] === 'e' || input[i] === 'o'){
            debugger
            vowels++
        }else {
            nonVowels++
        }
    }
    if(nonVowels === 0){
        return true
    }else{
        return false
    }
}
console.log(checkVowels('aiuejooa')) // FALSE
console.log(checkVowels('aiueo')) //true
console.log(checkVowels('aieeuuoa')) //true
console.log(checkVowels('aiuuuuueeeeoooool')) // false
console.log(checkVowels('aiuiuuuuuuaaeeeeee')) //true