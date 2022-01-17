const num1 = 8
const num2 = 6
let val

//Addition
val = num1 + num2 //14

//Substraction
val = num1 - num2 //2

//Multiplacation
val = num1 * num2 //48

//Division
val = num1 / num2 //1.3

//Modulus (Remainder)
val = num1 % num2 //2

//Math Object
val = Math.PI //3.14
val = Math.round(8,7) //8
val = Math.round(8.4) //8
val = Math.pow(8, 2) //64 same as 8 * 8
val = Math.sqrt(64) //8 same as akar dari 64 = 8
val = Math.abs(-4); //4 same as - 4
val = Math.ceil(8.1); // 9 same as example 8.1 return 9 8.0 return 8
val = Math.floor(8.9); // 8
val = Math.min(2, 6, 1); // mencari nomor terkecil yaitu 1;
val = Math.max(2, 6, 1); // mencari nomor terbesar yaitu 6;

//Math.random() returns a random number between 0 (Inclusive), and 1 (exclusive) :
val = Math.random()

//random between 1 to 5
val = Math.floor(Math.random() * 5 + 1)



console.log(val);