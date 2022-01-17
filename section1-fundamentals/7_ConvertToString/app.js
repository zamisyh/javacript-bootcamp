let val;
//number to string
val = 999 // 999, number, undefined
val = String(val) //999, string, 3

//bolean to string
val = true //true, bolean, undefined
val = String(val) // true, boolean, 4

//date to string
val = new Date() //date, object, undefined
// val = String(val) //date, string, 58
val = val.toString() //date, string, 58
 
//array to string
val = [1, 2, 3] // array, object, 3
val = val.toString() // 1,2,3 , string, 5

console.log(val)
console.log(typeof val)
console.log(val.length)