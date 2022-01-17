let val;
//String to number
// val = 8 //8, number, 8.00
val = '8' // error
val = Number(val) //8, number, 8.00


//boolean to number
val = true //error
val = Number(val) //1, number, 1.00


//both false and null is 0
val = 'Alan'
val = [1, 2, 3]
val = Number(val) //NaN, NUMBER, NaN
val = parseInt('12.34') // 12, number, 12.00
val = parseFloat('12.34') //12.34, number, 12.34

console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))

// const num1 = 8
// const num2 = 18
// const sum = num1 + num2
// console.log(sum) 
// res = 26

// const num1 = '8'
// const num2 = 18
// const sum = num1 + num2
// console.log(sum);
//res = 818