let myStr = 'Syed Taha Mashhadi'

function vowelCount(str){
 
    return (str.split('').filter( w => w.match(/[aeiouAEIOU]/g))).length
}

document.getElementById('msg').innerHTML = myStr + ' contains ' + vowelCount(myStr) + ' vowels'

