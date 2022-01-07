const todos = [{
    text:'A',
    completed:false
},{
    text:'B',
    completed:true
},{
    text:'C',
    completed:true
},{
    text:'D',
    completed:false
},{
    text:'E',
    completed:true
}]

//const deleteTodo = function (todos, todoText) {
   // const index = todos.findIndex(function(todo) {
   //     return todo.text.toLowerCase() === todoText.toLowerCase()
   // })

  //  if(index > -1){
  //      todos.splice(index,1)
   // }
//}

//deleteTodo(todos,'c')

const sortTodos = function(todos){
    todos.sort(function(a,b){
        if (!a.completed && sb.completed){
            return -1
    }   else if (!b.completed && !a.completed){
            return 1
    }
        else{
            return 0
    }
    })
}

//const todothings = function(todos){
   //return todos.filter(function(todos){
    //   return !todos.completed  // return todos.completed === false  
   //})
//}


//console.log(todothings(todos))

sortTodos(todos)
console.log(todos)