document.getElementById('button1')
.addEventListener('click', getText)

document.getElementById('button2')
.addEventListener('click', getJson)

function getText(){
   fetch('data.txt').then(function(res) {
        return (res.text())
   }).then((data) => {
        document.getElementById('output').innerHTML = `<h3>${data}</h3>`
   }).catch((err) => {
        console.log('ERROR : ' + err)
   });
}

function getJson(){
    fetch('todos.json').then(function(res) {
          return (res.json())
    }).then((todos) => {
         let output = '';
         todos.forEach(todo => {
            output += `<li>${todo.title}</li>`  
         });

         document.querySelector('#output').innerHTML = output
    }).catch((err) => {
         console.log('Error : ' + err)
    });
}