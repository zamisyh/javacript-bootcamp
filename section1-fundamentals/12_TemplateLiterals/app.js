let name = "Zamzam"
let age = 19
let dringking = 'Tea'
let message;

function drink(){
    if (age > 18) {
        return 'beer'
    } else {
        return 'tea'
    }
}

message = 'Hallo, my name is ' + name + ', I love drinking ' + dringking;
message = `Hallo, my name is ${name}, I love dringking ${drink()}` // template literals
message = 'Hallo, my name is ' + name + ', I love dringking ' 
            + (age > 18 ? 'beer' : 'tea') // with ternary operator
console.log(message)