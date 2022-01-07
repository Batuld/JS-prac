let myAccount = {
    name:'Batul',
    expenses: 0,
    income: 0
}

let addexpenses = function( account, amount){
    account.expenses = account.expenses + amount
}

let addincome = function (account, income){
    account.income = account.income + income
}
let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
}
    

let getaccountsummary = function (account){

    let balance = account.income - account.expenses

    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addincome(myAccount, 2000)
addincome(myAccount, 500)
addexpenses(myAccount, 200)
addexpenses(myAccount, 100)
console.log(getaccountsummary(myAccount))
resetAccount(myAccount)
console.log(getaccountsummary(myAccount))











