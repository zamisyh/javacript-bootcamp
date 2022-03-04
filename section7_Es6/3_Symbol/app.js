// const s1 = Symbol();
// const s2 = Symbol.iterator;
// const s3 = Symbol(123);
// const s4 = Symbol('Hello');
// console.log(typeof s1)
// console.log(typeof s2)
// console.log(typeof s3)
// console.log(typeof s4)
// console.log(Symbol(123) === Symbol(123))
// const sym1 = Symbol.for(555);
// console.log(Symbol.keyFor(sym1));
;
let obj = {};
obj.prop1 = 'value'
console.log(obj);
const sym2 = Symbol('prop2');
const sym3 = Symbol('value3');
obj[sym2] = 'value2'
obj.prop3 = sym3;
for (const i in obj) {
   console.log(i, obj[i]);
}

console.log(JSON.stringify(obj));