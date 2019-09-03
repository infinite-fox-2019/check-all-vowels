function checkVowels (str){

    var vowels = 'aiueo';
    var counter = 0
    var newStr = ''
    for(var i = 0; i<str.length; i++){
       if(vowels[counter].toLowerCase() !== str[i].toLowerCase()){
           counter ++
       }
       else{
           newStr+=str[i]
           counter++
       }
    }
    if(newStr.length === str.length){
        return true
    }else{
        return false
    }
}
console.log (checkVowels('aiueo'));
console.log (checkVowels('AIUeo'));
console.log (checkVowels('FeiuZ'));
