const notes =[{
    title:'i next trip',
    body:'i would like to go to spain'
},{
    title:'habits to work on',
    body:'excercise. eating a bit better.'
},{
    title: 'office modification',
    body: 'get a new seat'
}]

    document.querySelector('#create-note').addEventListener('click', function (e){
        e.target.textContent = 'the button was clicked'
    })

    document.querySelector('#remove-all').addEventListener('click', function(){
        document.querySelectorAll('.note').forEach (function( note){
            note.remove()
        })
    })
    

    document.querySelector('#search-text').addEventListener('input', function (e){
        console.log(e.target.value)
    })
