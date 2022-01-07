const account= {
    name:'batul Dhankot',
    expenses:[],
    income:[],

    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })

    },
    addIncome:function (description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary:function(){
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function (expense){
            totalExpenses = totalExpenses + expense.amount
            })

        this.income.forEach(function (income){
            totalIncome = totalIncome + income.amount
             })

            balance = totalIncome - totalExpenses

        return `Account for ${account.name} has $${balance}. $${ totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense('rent', 950)
account.addExpense('coffee', 2)
account.addIncome('qa', 1000)
console.log(account.getAccountSummary())
