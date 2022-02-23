// function Person(name, dob){
//     this.name = name;
//     this.dob = new Date(dob);
//     this.calculate_age = function(){
//         var diff_ms = Date.now() - this.dob.getTime();
//         var age_dt = new Date(diff_ms);

//         return Math.abs(age_dt.getUTCFullYear() - 1970);
//     }

//     console.log(this.calculate_age());
// }

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    message(){
        return `Hallo I am ${this.firstName} ${this.lastName}`
    }
    calculate_age() {
        var diff_ms = Date.now() - this.dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    setNewLastName(newLastName){
        this.lastName = newLastName;
    }
}

const alan = new Person('Alan', 'Smith', '11-13-2003');
alan.setNewLastName('William');
console.log(alan);