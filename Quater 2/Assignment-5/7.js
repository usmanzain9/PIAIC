function checkWeekend(date){

    let d = new Date(date)

    return (d.getDay() == 6 | d.getDay()) == 7 ? 'Its Weekend' : `Sorry! wait for ${7-d.getDay()} more days`

}

document.getElementById('msg').innerHTML = checkWeekend('Oct 12, 2019')