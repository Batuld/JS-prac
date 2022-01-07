const getsavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null){
        todos = JSON.parse(todosJSON)
    }else {
        return[]
    }

}

const getSavedTodos = function (todos)
{
    localStorage.setItem('todos', JSON.stringify(todos))
}


// Render application todos based on filters

const renderTodos = function (todos, filter) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCompletedMatch = !filter.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(GenerateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
       
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
} 

//get DOM element for individual note
const generateTodosDom = function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}

//get DOM summary

const GenerateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    
}
