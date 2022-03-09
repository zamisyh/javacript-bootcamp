// const user = {
//     name: 'Zamzam Saputra',
//     secret: 'You are handsome!',
//     getSecret: function(){
//         return `Hi, my name is ${this.name}. the secret is ${this.secret}`
//     }
// }

const user = (function(){
    let name = 'Zamzam';
    let secret = 'You are handsome!';
    const getSecret = function(){
        return `Hi, my name is ${name}. the secret is ${secret}`
    }

    return {
        callGetSecret: function() {
            return getSecret();
        }
    }
})()

console.log(user.callGetSecret());