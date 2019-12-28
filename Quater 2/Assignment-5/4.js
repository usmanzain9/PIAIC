function calcCircumference (radius){

    return `The circumference of a circle is ${(2*3.14*radius).toFixed(2)}` 
}

document.getElementById('msg1').innerHTML = calcCircumference(3)

function calcArea(radius){

    return `The area of a circle is ${(3.14*(radius*radius)).toFixed(2)}`
}

document.getElementById('msg2').innerHTML = calcArea(4.6)
