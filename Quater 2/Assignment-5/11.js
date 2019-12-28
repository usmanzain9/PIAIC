function isVowel(char){
    switch (true) {
        case char.match(/[aeiouAEIOU]/g) == char:
            return true
            
        default:
            return false
    }
}

console.log(isVowel('i'))

