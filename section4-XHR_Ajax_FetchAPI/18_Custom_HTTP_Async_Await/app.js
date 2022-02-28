const http = new myHTTP();
// http.get(
//      'https://jsonplaceholder.typicode.com/posts'
// ).then((data) => console.log(data))
// .catch((err) => console.log(err))


const data = {
     title: 'A new title',
     body: 'This is a new post'
}

// http.post(
//      'https://jsonplaceholder.typicode.com/posts',
//      data
// ).then((data) => console.log(data))
// .catch((err) => console.log(err))

// http.put(
//      'https://jsonplaceholder.typicode.com/posts/1',
//      data
// ).then((data) => console.log(data))
// .catch((err) => console.log(err))

http.delete(
     'https://jsonplaceholder.typicode.com/posts/1',
     data
).then((data) => console.log(data))
.catch((err) => console.log(err))