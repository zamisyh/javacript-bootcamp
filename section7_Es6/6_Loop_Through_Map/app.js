const users = new Map();
users.set(
   'Alan',
   {
      'job_title' : 'Accountant',
      email: 'alan@gmail.com'
   }
)
users.set(
   'Joe',
   {
      'job_title' : 'Manager',
      email: 'joe@gmail.com'
   }
)
users.set(
   'Dina',
   {
      'job_title' : 'Directur',
      email: 'dina@gmail.com'
   }
)

console.log(users.get('Alan'))
console.log(users.has('May'))
console.log(users.delete('Joe'))
console.log(users.size)

for (const [key, user] of users) {
   console.log(`${key}: ${user.job_title}`)
}  

for (const key of users.keys()) {
   console.log(`${key}`)
}

for (const user of users.values()) {
   console.log(user['job_title'])
}

users.forEach(user, key => {
   console.log(`${key} : ${user}`)
});