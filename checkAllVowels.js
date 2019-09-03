function checkVowel(string){
  var vowel = 'aiueo'
  var check = false;
  loop1:
  for (var i=0; i<string.length;i++){
    for (var j=0; j<vowel.length;j++){
      if (string[i]==vowel[j]){
        check = true;
        continue loop1;
      } else {
        check = false
      }
    }
    if (!check) {
      return false
    }
  }
  return check
}

console.log(checkVowel("infinite")) // False
console.log(checkVowel("ieauo")) // True
console.log(checkVowel("fox")) // False