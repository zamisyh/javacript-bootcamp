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

// console.log(set1)

//check wheter exist
console.log(set1.has(5))
console.log(set1.has({name: 'Zamzam'}))
console.log(set1.has(obj))
console.log(set1)
set1.delete(obj)