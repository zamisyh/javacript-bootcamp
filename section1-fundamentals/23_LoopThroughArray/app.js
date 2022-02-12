const users = ['Zamzam', 'Wasis', 'Sultan']

//for loop
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

//for of
// for (const user of users) {
//     console.log(user)
// }


//foreach
// users.forEach(e => {
//     console.log(e)
// });

//arrow function
// users.forEach(function (user, index, arr){
//     console.log(index, user, arr)
// });

//map function
// const hiUsers = users.map(function(user){
//     return `Hi, ${user}`
// });

// console.log(hiUsers)

//for in
const user = {
    name: 'Zamzam',
    age: 19,
    title: 'Programmer'
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}

