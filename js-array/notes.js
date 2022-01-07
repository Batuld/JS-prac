// array wiyj 5 todos

//you have x todos

//print the first and second to last items -> todo: walk the dog

const todos = ['a','b','c','d','e']

console.log(`you have ${todos.length} todos!`)

//console.log(`todos:${todos[0]}`)
//console.log(`todos:${todos[todos.length-2]}`)


// delete the 3 rd item 
//add a new item onto the end
//remove first item from the list

//todos.splice(2,1)
//todos.push('f')
//todos.shift()
//todos.splice(0,1)

todos.forEach(function (todo, index){
   const num = index + 1
    console.log(`${num}. ${todo}`)
})


//for (let count = todos.length - 1; count >=0; count--)

for (let count=0; count < todos.length; count++)
{
    const num = count + 1  

    const todo = (todos[count])

    console.log(`${num}. ${todo}`)
}



//console.log(todos.length)
//console.log(todos)
