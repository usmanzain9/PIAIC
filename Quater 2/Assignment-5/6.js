let arr = [0,5,6,7]

function mirror(arr){

    let reverseArr = [...arr].reverse()

    return arr.concat(reverseArr)
}

document.getElementById('msg').innerHTML= mirror(arr)


