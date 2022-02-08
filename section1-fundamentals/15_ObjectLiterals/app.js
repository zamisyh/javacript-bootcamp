const user = {
    id: 1,
    email: "zamsyh.dev@gmail.com",
    dob: 2003,
    firstt_name: "Zamzam",
    last_name: "Saputra",
    avatar: "https://avatar.com",
    department: {
        name: 'IT',
        position: "Programmer"
    },
    task: ['creatings apps', 'meetings'],
    getAge: function() {
        return new Date().getFullYear() - this.dob
    }
}

console.log(user)