let input = 666


document.getElementById('input').innerHTML = input

var mean = [...input + '' ].map(x=>Number(x))

document.getElementById('output').innerHTML = Math.round( mean.reduce( (a,b) => a+b) / mean.length )
