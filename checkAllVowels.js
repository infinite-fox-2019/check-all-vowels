function checkVowel(str){
	const vowels = "aiueo "
	if(str.length === 0){
		return true
	}
	else{
		var isVowel = false
		for(var content of vowels){
			if(str[0]===content ||str[0]===content.toUpperCase()) {
				isVowel = true
			}
		}
		return isVowel && checkVowel(str.slice(1))
	}
}

console.log(checkVowel('abaei'))
console.log(checkVowel('aei'))
console.log(checkVowel('aeibb'))
console.log(checkVowel(''))

