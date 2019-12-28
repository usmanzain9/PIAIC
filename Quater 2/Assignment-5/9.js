function addWeek(week){
    let monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                     ];

    let d=new Date()

    Date.prototype.subHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
    }
    comingWeek = d.subHours(week*7*24)
    return  comingWeek.getDate()+' ' +monthNames[comingWeek.getMonth()] +' ' +comingWeek.getFullYear()
}


document.getElementById('msg').innerHTML = addWeek(3)