let text = "The quick brown fox jumps over the lazy dog"

document.getElementById('txt').innerHTML = text

text = text.toLowerCase()

let word = 'the'

document.getElementById('word').innerHTML = word ;

document.getElementById('accurance').innerHTML = (text.match( new RegExp(word,'g')) || []).length 