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

function createTodo(todo){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            todos.push(todo)
            const err = false;
            if (!err) {
                resolve();   
            }else{
                reject('There is an error');
            }
        }, 2000)
    });
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
}).then(getTodos)
.catch(function(err){
    console.log(err);
});
