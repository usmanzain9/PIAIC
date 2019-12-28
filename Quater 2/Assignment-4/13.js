let myDate = new Date() ;

document.getElementById('cDate').innerHTML = myDate

let someDate = new Date("01-01-1970")

document.getElementById('eMil').innerHTML = Math.round((myDate-someDate))

document.getElementById('eMin').innerHTML = Math.round(((myDate-someDate)/1000)/60)
