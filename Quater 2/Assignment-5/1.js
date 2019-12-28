let no = prompt('Enter no to get factorial')

function factorial(no){

    no = Number(no)
    let myArr = Array.from(Array(no) , (x,index) => index + 1)

    let factorial = myArr.reduce( (x,y) => x*y)

    return factorial

}

document.getElementById('msg').innerHTML = 'Factorial of ' + no + ' is '+ factorial(no)
