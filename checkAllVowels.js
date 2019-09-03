

function cekVokal(string){
    var str = string.toLowerCase()
    var temp = ''
    for(var i = 0; i<str.length;i++){
      if (str[i] == 'a'|| str[i] == 'i'|| str[i] == 'u' || str[i] == 'e'|| str[i] == 'o'|| str[i] == ' '){ 
      }
      else 
        temp += str[i]
    }
    if (temp){
        return false
    }
        return true
}

console.log(cekVokal('a'))
console.log(cekVokal('fgh'))
console.log(cekVokal('aiauaiaoaiiaueoeieu'))
console.log(cekVokal('aaiuaiuaiuaiuaiuiuiuiauiauss'))
console.log(cekVokal('aaiuaiuaiuaiuaiuiuiu  iauiau'))