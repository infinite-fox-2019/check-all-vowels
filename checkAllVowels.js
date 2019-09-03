function checkVowels (str) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  var isAllVowels = true;

  for (var i = 0; i < str.length; i++) {
    var check = false;
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        check = true;
        break;
      }
    }
    if (!check) {
      isAllVowels = false;
    }
  }
  return isAllVowels;
}

// Test case

console.log(checkVowels('ABCDEED'));
console.log(checkVowels('AooUEEi'));
console.log(checkVowels('vvAddAvv'));
console.log(checkVowels('uueeEEOu'));
