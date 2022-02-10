function user(name = 'John', age = 20){
//    if (typeof name === 'undefined') {
//        name = 'John'
//    }

//    if (typeof age === 'undefined') {
//        age = 20
//    }

   return `Hallo, my name is ${name} and age ${age}`;
}

console.log(user())
console.log(user('Zamzam', 18))