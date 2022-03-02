const str = "The dog is running in the street. Alann, who is 18 years old, looking for the dog under the tree.";
let re;
re = /n+/g
re = /ni?/g
re = /un*/g


const result = str.match(re);
console.log(result);