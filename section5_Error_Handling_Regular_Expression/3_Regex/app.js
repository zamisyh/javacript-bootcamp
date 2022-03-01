let re;
re = /hello/ig;
console.log(re.source);

//exec()
// const result = re.exec('Hello everyone')
// console.log(result)
// console.log(result[0])
// console.log(result.input)

//match
// 


//test
// const result = re.test('Hello')
// console.log(result);

//search
// const string = 'Hi, Hello, Hello';
// const result = string.search(re);
// console.log(result)

//replace
const string = 'Hi, Hello, Hello';
const result = string.replace(re, 'HEY')
console.log(result)