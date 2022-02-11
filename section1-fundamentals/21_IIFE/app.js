// const sum = function (a = 1, b = 2){
//    return a + b;
// }

// console.log(sum())

//IIFE (Immediatelly Invoked Function Expression)

// var num = 90;

// (function(){
//    var num = 3;
//    console.log(num);
// })() // using ()()

// console.log("Outsidie IIFE", num)

const person = {
   hello: function(){
      console.log("Hello")
   },
   age: function(age){
      console.log(`I am ${age} years old`)
   }
}

person.hello()
person.age(20)