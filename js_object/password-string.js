let isvalidpassword = function(password)
{
    return  password.length > 8 && !password.includes('password')     
}

console.log(isvalidpassword('asfgd'))
console.log(isvalidpassword('abc123%#$&FH'))
console.log(isvalidpassword('veuuehknpassword'))
