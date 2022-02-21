function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.calculate_age = function() {
    //     var diff_ms = Date.now() - this.dob.getTime();
    //     var age_dt = new Date(diff_ms);

    //     return Math.abs(age_dt.getUTCFullYear() - 1970)
    // }
} 

Person.prototype.calculate_age = function() {
    var diff_ms = Date.now() - this.dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970)
}

const Peter = new Person('Peter', 'Brown', '12-12-1996');
const Alan = new Person('Alan', 'Smith', '10-10-2000');

Person.prototype.getFullname = function() {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.setNewLastName = function (newLastName){
    this.lastName = newLastName;
}

console.log(Peter.getFullname());
Peter.setNewLastName('William');
console.log(Peter.getFullname());
console.log(Peter.hasOwnProperty('firstName'))
console.log(Peter.hasOwnProperty('calculate_age'));