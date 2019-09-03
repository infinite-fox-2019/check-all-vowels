function check(str){
  var data = ['a','i','u','e','o','A','I','U','E','O'];

  var hasil = []

  for(var i = 0; i < str.length; i++){
    var tanda = false;
    for(var j = 0; j < data.length; j++){
      if(str[i] == data[j]){
        hasil.push(true);
        tanda = true;
      }
    }
    if(!tanda){
      hasil.push(false)
    }
  }
  for(var i = 0; i < hasil.length; i++){
    if(!hasil[i]) return false;
  }
  return true;
}

console.log(check('aiueo'))
console.log(check('aiAueow'))
console.log(check('iueouauuuuuOOUOUAIOUAOIOEUOEUOEU'))
console.log(check('iueouauuuuuOOUOUAIOUAOIOEUOEUOEUg'))