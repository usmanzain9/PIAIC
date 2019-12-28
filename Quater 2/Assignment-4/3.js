function checkPswd(pswd){

    pswd = pswd.value
    
    var char = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})/ ;

    (pswd.match(char) && !(pswd.charAt(0).match(/[1-9]/g)) ) ? alert('Password is Valid') : alert('enter a valid password. For character codes of a-z,A-Z & 0-9')

}

