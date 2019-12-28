function checkEmail(mail){
    
    mail = mail.value

    let char = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   (mail.match(char)) ? alert('Valid Email') : alert('Please Enter valid email')

}