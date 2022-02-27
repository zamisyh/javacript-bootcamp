document.getElementById('button1')
.addEventListener('click', getText)

document.getElementById('button2')
.addEventListener('click', getJson)

document.getElementById('button3')
.addEventListener('click', getApi)

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

function getApi(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
          return (res.json());
    }).then((posts) => {
         let output = '<ul>';
         posts.forEach(post => {
              output += `
                <li>Title : ${post.title}</li>
                <li>Body : ${post.body}</li>
              `
         });

         output += '</li>'

         document.getElementById('output').innerHTML = output
    }).catch((err) => {
         console.log('ERROOR : ' + err)
    });
}