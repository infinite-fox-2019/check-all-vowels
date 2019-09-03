/*
check vowels
string bebas
*/

function cekKata(input){
    //console.log(input)
    var vowels = ["a","i","u", "e", "o", "A", "I", "U", "E", "O"] 

    var count = 0
    for(var i=0; i<input.length; i++){
        for(var j=0; j<vowels.length; j++){
            //console.log(input[i],vowels[j])
            if(input[i]===vowels[j]){
                count++
            }
        }
    }
    //console.log(count)
    if(count===input.length){
        return true
    }else{
        return false 
    }

}

console.log(cekKata("aiUeo"))
console.log(cekKata("Halo"))
console.log(cekKata("byebye"))
console.log(cekKata("aaaaaaaaaaiiiiiiiiiueueoeuoeuoeua"))
