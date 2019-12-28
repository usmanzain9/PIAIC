let word = prompt('Enter a word to check Palindrome')

function checkPalindrome(word){

    let wordArr = word.split('')
    wordArr = wordArr.reverse()

    return wordArr.join('') === word ? `${word} is Palindrome` : `${word} is not Palindrome`
}

document.getElementById('msg').innerHTML = checkPalindrome(word)
