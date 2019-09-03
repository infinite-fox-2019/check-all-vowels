function checkAllVowels (str){
    str = str.toLowerCase();
    var strKonsonan = "bcdfghjklmnpqrstvwxyz";

    if(!str){
        return "Tidak ada kata yang dimasukkan"
    }
    for(var i = 0; i < str.length;i++){
        for (var j = 0; j < strKonsonan.length;j++){
            if (strKonsonan[j]==str[i]){
                return false;
            } 
        }
    }
    return true;
}

console.log(checkAllVowels("aaaoiueo"));//True
console.log(checkAllVowels("aaaoijkeo"));//False
console.log(checkAllVowels("jaaoiueo"));//False
console.log(checkAllVowels("AaaDSAoiueo"));//False
console.log(checkAllVowels("aAaoiueo"));//True
console.log(checkAllVowels(""))//Tidak ada kata yang dimasukkan