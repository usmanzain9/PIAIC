let date = new Date()

document.getElementById('cDate').innerHTML = date

Date.prototype.subHours = function(h) {
    this.setTime(this.getTime() - (h*60*60*1000));
    return this;
}

document.getElementById('pDate').innerHTML = date.subHours(1)