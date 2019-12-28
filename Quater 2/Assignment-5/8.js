function calculateAge(dateString){

    let today = new Date()
    let dob = new Date(dateString)

    let ageYear = today.getFullYear() - dob.getFullYear()
    let ageMonth = today.getMonth() - dob.getMonth()
    let ageDate = today.getDate() - dob.getDate()
    
    return `You are ${ageYear} years, ${ageMonth} month and ${ageDate} days old`
}

document.getElementById('msg').innerHTML = calculateAge('Sep 01, 1979')
