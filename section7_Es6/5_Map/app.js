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