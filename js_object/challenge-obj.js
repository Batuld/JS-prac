let intro = {
    nme: 'Batul',
    age: 21,
    city: 'Ahemedabad'
}

console.log(`${intro.nme} is ${intro.age} and lives in ${intro.city}.`)

intro.age= intro.age + 1

console.log(`${intro.nme} is ${intro.age} and lives in ${intro.city}.`)



//chanllenge

let convertfahrenheit = function (fahrenheit) {
    return{
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) *( 5  / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    
}

}

let temps = convertfahrenheit(74)

console.log(temps)






