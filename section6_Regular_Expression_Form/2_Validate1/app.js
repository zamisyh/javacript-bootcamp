document.getElementById('firstName')
.addEventListener('blur', validateFN)

function validateFN(){
    const firstName = document.getElementById('firstName');
    const re = /^[a-zA-Z]{2,8}$/
    if(!re.test(firstName.value)){
        firstName.classList.add('is-invalid');
        firstName.classList.remove('is-valid');
    }else{
        firstName.classList.add('is-valid');
        firstName.classList.remove('is-invalid');
    }
}