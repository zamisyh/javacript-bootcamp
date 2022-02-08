const arr1 = [30, 50, 6, 40]
const arr2 = new Array(80, 20)
const users = ['Zamzam', 'Wasis', 'Sultan', 'Fikri']
const anything = ['Zamzam', 3, null,
undefined, true, {
    name: 'Zamzam', 
    age: 19 
}, new Date()]

let val;

//manipulating the array
//add to the end
// arr1.push(200)

//add to the front
// arr1.unshift(300)

//remove the end
// arr1.pop()

//remove the front
// arr1.shift()

//at position 1, remove one item and insert "one" "two"
// arr1.splice(1, 1, "One", "Two")
// arr1.splice(1, 2)

//reverse
// arr1.reverse()

//concat 
// val = arr1.concat(arr2)

//sort
// val = users.sort().reverse()
// val = arr1.sort()

//sort with compare function
// val = arr1.sort(function(a, b){
//     return a-b
// })

//reverse sort with compare function
// val = arr1.sort(function(a, b){
//     return b - a
// })

//find
function get10(num){
    return num > 10
}
val = arr1.find(get10)

//find and filter
val = arr1.filter(get10)

console.log(val)