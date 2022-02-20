function Person(name, dob){
    this.name = name;
    this.dob = new Date(dob);
    this.calcuate_age = function() {
        var diff_ms = Date.now() - this.dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    console.log(this.calcuate_age());
}

const Zami = new Person('Zami', '12-13-2003');
const Alan = new Person('Alan', '10-10-2002');