//array desctructuring

// [a, b, ...c] = [1, 2, 3, 4, 5, 6]
// console.log(c)

// [user1, user2, user3] = ['Peter', 'Alan', 'John']
// console.log(user2)

// function getItems(){
//    return ['Milk', 'Fish', 'Apple']
// }

// [item1, item2, item3] = getItems();
// console.log(item2)

//obect destructuring

// ({a, b} = {a: "Mary", b: "Jane"});
// console.log(a)

const user = {
   "id": 7,
   "email": "michael.lawson@reqres.in",
   "first_name": "Michael",
   "last_name": "Lawson",
   "avatar": "https://reqres.in/img/faces/7-image.jpg"
};

// const id = user.id;
const { email, id } = user
console.log(email)