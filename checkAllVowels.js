function checkVowel(str){
  var kamus = ['a','i','u','e','o']
  var stringSplit = str.split('')
  var tampung = []
  for(var i=0; i<kamus.length; i++){
      for(var j=0; j<stringSplit.length; j++){
          if(kamus[i]===stringSplit[j]){
              tampung.push(stringSplit[j])
          }
      }
  }
  if(tampung.join('').length !== str.length){
      return false
  }else{
      return true
  }
}
console.log(checkVowel('makan'))
console.log(checkVowel('aiueo'))
console.log(checkVowel('uaiuai'))
