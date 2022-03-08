const set1 = new Set();
set1.add(5)
set1.add('Another String');
set1.add(5);
set1.add({
   name: 'Zamzam'
});
set1.add({
   name: 'Lucas'
});

let obj = {name: 'John'}
set1.add(obj);

// for (const [key, value] of set1.entries()) {
//    console.log(key);
// }

set1.forEach(value => {
   console.log(value)
})

const arr = Array.from(set1);
console.log(arr);