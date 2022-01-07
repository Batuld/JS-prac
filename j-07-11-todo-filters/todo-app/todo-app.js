let todos = getSavedTodos()

    //text: 'Order cat food',
   // completed: false
//}, {
  //  text: 'Clean kitchen',
   // completed: true
//}, {
  //  text: 'Buy food',
   // completed: true
//}, {
   // text: 'Do work',
  //  completed: false
//}, {
   // text: 'Exercise',
   // completed: true
//}]

const filters = {
    searchText: ''
}


renderTodos(todos, filters)


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todos').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.element.text.value,
        completed:false
    })
localStorage.setItem('todos', JSON.stringify(todos))

    renderTodos(todos, filters)
    e.target.element.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos,filters)
})