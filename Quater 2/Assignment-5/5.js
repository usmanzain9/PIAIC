function getNotes (no){

    let hundreadNotes = Math.trunc(no/100) ;
    let fiftyNotes = Math.trunc((no%100)/50) ;
    let tenNotes = Math.trunc( ( ( no%100) % 50 ) / 10)

    return `You will have ${hundreadNotes} hundread notes, ${fiftyNotes} fifty notes & ${tenNotes} ten notes`
}


document.getElementById('msg').innerHTML = getNotes(70)