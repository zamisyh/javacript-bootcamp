const firstName = 'Zamzam'
const lastName = 'Saputra'

let val;

//concatenate
val = firstName + lastName // ZamzamSaputra
val = firstName + ' ' + lastName // Zamzam Saputra

//Append
val = 'Zamzam'
val += 'Saputra'
// ** result = ZamzamSaputra
 
//Escaping
val = "That's great. that you've very found a job"
val = 'That\'s great. that you\'ve very found a job'

//length
val = firstName.length //6

//concat
val = firstName.concat(' ', lastName) //Zamzam Saputra

//change case
val = firstName.toUpperCase() //ZAMZAM
val = firstName.toLowerCase() //zamzam

console.log(val)