const todos = [
    {
        title: "First todo",
        body: "This is first todo"
    },
    {
        title: "Second todo",
        body: "This is second todo"
    }
];

function createTodo(todo, callback){
    setTimeout(function(){
        todos.push(todo)
        callback()
    }, 2000)
}

function getTodos(){
    setTimeout(() => {
        let output = '';
        todos.forEach(function(todo){
            output += `<li>${todo.title}</li>`
        });

        document.body.innerHTML = output;
    }, 3000);
}

createTodo({
    title: 'Third todo',
    body: 'Third body'
}, getTodos());
