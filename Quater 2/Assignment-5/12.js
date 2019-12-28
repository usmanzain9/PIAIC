function guessingGame(){
    
    play()
    let playAgain = prompt('Do you want to play again enter yes | no ')

    while (playAgain !== 'no'){

        play()
        playAgain = prompt('Do you want to play again enter yes | no')

    }

}

function play(){
    let randomNo = Math.round(Math.random()*100)  
    let guessNo = null     
    
    let chances = 0 ;

    console.log(randomNo)

    while(chances !== 3){
        chances += 1;
        guessNo = Number(prompt('Guess any no from 0-100'))

        if(guessNo == randomNo){
            alert('You are right.. You Won')
            break
        }else{
            alert('You are wrong.. Try again')
        }
    }
}

guessingGame()