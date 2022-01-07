//const para = document.querySelectorAll('p')

//para.forEach(function (para) {
 //   if(para.textContent.includes('is')){
 //   para.remove()
 //   }
//})

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



  //const incompleteTodos = todos.filter(function( todo){
   
     //  return !todo.completed  // return todos.completed === false  
      
 //})
 
 //const summary = document.createElement('h2')
  //  summary.textcontent = `you have ${incompleteTodos.length} todos left`
    //  document.querySelector('body').appendChild(summary)
 
       // todos.forEach(function (todo){
       //    const p = Document.createElement('p')
        //   p.textcontent = todo.text
        // Document.querySelector('body').appendChild(p)
       // })

         document.querySelector('#todo').addEventlListener('click', function(e){
            console.log('did this work?')
            console.log('e')
        })

    