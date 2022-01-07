let getTip = function (total, tipPercent =.2){
    return total*tipPercent
}

let tip = getTip(100, .25)

console.log(tip)

 //
 
 let getTip = function(total, tipPercent =.2){
    let percent = tipPercent * 100
    let tip = total*tipPercent
    return `A ${percent}% tip on $${total} would be $${tip} `
 }
 
 let tip = getTip(60,.30)
 
 console.log(tip)
