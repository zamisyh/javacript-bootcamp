const profilePrototype = {
    message: function() {
        return `Hello, I am ${this.firstName} ${this.lastName}`;
    },
    setNewLastName: function(newLastName){
        this.lastName = newLastName;
    }

}

const name = Object.create(profilePrototype)
name.firstName = 'Zami';
name.lastName = 'William';
name.age = 19;
name.setNewLastName('Doe');

console.log(name.message())

const name2 = Object.create(profilePrototype, {
    firstName: {value: 'Alan'},
    lastName: {value: 'Smith'},
    age: {value: 19}
});

console.log(name2.message());