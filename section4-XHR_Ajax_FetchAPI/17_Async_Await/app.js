const message = async () => {
     return 'You have a new message!'
}

message().then(res => console.log(res))

const getTodos = async () => {
     const res = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
     )
     
     if (res.status === 200) {
          const data = await res.json()
          return data;
     } else {
          throw new Error('Something went wrong!');
     }
     
}

getTodos()
.then((todos) => console.log(todos))
.catch((err) => console.log(err));