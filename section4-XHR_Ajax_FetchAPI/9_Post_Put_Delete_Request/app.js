const http = new myHTTP();

// const posts = http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, res) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res);
//     }
// });

const data = {
    title: 'A new title',
    body: 'This is a new post'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res){
    if (err) {
        console.log(err);
    }else{
        console.log(res);
    }
})


http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, res){
    if (err) {
        console.log(err);
    }else{
        console.log(res);
    }
})

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, res){
    if (err) {
        console.log(err);
    }else{
        console.log(res);
    }
})





