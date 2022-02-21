function Person(name, dob){
    this.name = name;
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

const Peter = new Person('Peter', '12-12-1996');
const Alan = new Person('Alan', '10-10-2000');

console.log(Peter.calculate_age === Alan.calculate_age)
console.log(Peter.calculate_age());