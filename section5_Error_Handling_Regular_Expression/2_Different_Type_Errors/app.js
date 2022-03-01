const person = {
    name: 'Zami'
}
try {
   
    if (!person.email) {
        throw new TypeError('Email not exists!')
    }

} catch (error) {
    console.log(error.message);
} finally {
    // console.log('close file')
}

console.log('continue')