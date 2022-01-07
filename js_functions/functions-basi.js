let fahrenheitintocelsius = function(fahrenheit)
{

    let celsius = (fahrenheit-32) * 5/9
    let kelvin = (fahrenheit + 459.67) * 5 / 9

    return celsius
    return kelvin  
}


let value = fahrenheitintocelsius(32)

let othervalue = fahrenheitintocelsius(68)

console.log(value)
console.log(othervalue)