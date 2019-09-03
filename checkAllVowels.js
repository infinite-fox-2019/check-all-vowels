function CheckVowels(data){
    let pembanding = data.toLowerCase()
    for(let i = 0 ; i < pembanding.length; i++){
        switch (pembanding[i]) {
            case 'a' :{;break;}
            case 'i' :{;break;}
            case 'u' :{;break;}
            case 'e' :{;break;}
            case 'o' :{;break;}
            default : return false
        }
    }
    return true
}
console.log(CheckVowels('aaaaiiiiioooouu'));
console.log(CheckVowels('aaiaiaiaoiaoiag'));
