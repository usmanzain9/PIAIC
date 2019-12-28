let date = new Date() ;

let msg = date.getDate() <=15 ? 'First Fifteen days of the month' : 'Last days of the month'

document.getElementById('msg').innerHTML = msg