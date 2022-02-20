const name1 = "Zami";
const name2 = new String("Zami");
name2.age = 18;

console.log(name1, typeof(name1));
console.log(name2, typeof(name2));

if (name1 == name2) {
    console.log('Equal');
} else {
    console.log('Difference')
}