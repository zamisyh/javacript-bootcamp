// //set localstorage item
localStorage.setItem("name", "localZami")
localStorage.setItem("age", "19");

// set session storage item
sessionStorage.setItem("name", "sessionZami")

// localStorage.removeItem('name')
localStorage.clear();

const age = localStorage.getItem('age');
const localName = localStorage.getItem('name');
const sessionNama = sessionStorage.getItem('name'); 

console.log('age : ', age)
console.log('localName : ', localName);
console.log('sessionName : ', sessionNama)