const num1 = 8;
const num2 = new Number(8);

// console.log(num1);
// console.log(num2);

let item1 = true;
let item2 = new Boolean(true);

item1 = { name: 'Zami'};
item2 = new Object({name: 'Zami'})

item1 = [1,2,3,4];
item2 = new Array(1,2,3,4);

item1 = function(x, y){
    return x + y;
}

item2 = new Function('x', 'y', 'return x + y')

console.log(item1(3,4));
console.log(item2(4,5));