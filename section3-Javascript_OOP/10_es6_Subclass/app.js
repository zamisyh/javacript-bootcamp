class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    message(){
        return `Hallo this is ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, email){
        super(firstName, lastName);
        this.phone = phone;
        this.email = email;
    }
    static boughItemFee(item){
        return item * 100;
    }
}

const alan = new Customer('Alan', 'Smith', '1283098120', 'email@gmail.com');
console.log(alan);
console.log(alan.message());
console.log(Customer.boughItemFee(3));