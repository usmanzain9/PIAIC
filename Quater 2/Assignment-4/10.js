let no =38.065

let dPlaces = 2

document.getElementById('input').innerHTML = no
document.getElementById('dPlaces').innerHTML = dPlaces

let output = no.toFixed(dPlaces)

document.getElementById('output').innerHTML = output