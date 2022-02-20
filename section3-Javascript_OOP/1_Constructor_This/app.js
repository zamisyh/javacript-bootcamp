const data = {
    name: 'Zamzam',
    age: 19
}

// console.log(data)

function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(this)
}

const Zami = new Person('Zami', 19);
const Alan = new Person('Alan', 20)