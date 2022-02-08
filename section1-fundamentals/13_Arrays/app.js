const arr1 = [30, 50, 40]
const arr2 = new Array(80, 20)
const users = ['Zamzam', 'Wasis', 'Sultan', 'Fikri']
const anything = ['Zamzam', 3, null,
undefined, false, {name: 'Zamzam', age: 19 }, new Date()]

let val;
val = arr1.length

//check whether is array
val = Array.isArray(arr1) //true 

//add item in array
arr1[2] = 'last item' 

console.log(val)