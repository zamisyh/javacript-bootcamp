function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.message = function(){
    return `Halo ${this.firstName} ${this.lastName}`;
}

const person = new Person('Zamzam', 'Saputra');
console.log(person.message());


function Customer(firstName, lastName, phone, email){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.email = email;
}

Customer.prototype = Object.create(Person.prototype)
Customer.prototype.constructor = Customer;
const customer = new Customer('Zamzam', 'Saputra', 
'123414', 'email@gmail.com');

console.log(customer.message());
console.log(customer)