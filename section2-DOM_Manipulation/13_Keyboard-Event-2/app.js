const firstNameInput = document.getElementById('first_name');
const heading = document.querySelector('h3');

// firstNameInput.addEventListener('focus', run);
// firstNameInput.addEventListener('blur', run);
// firstNameInput.addEventListener('cut', run); // ctrl + x
// firstNameInput.addEventListener('paste', run); // ctrl + v
// firstNameInput.addEventListener('copy', run);
firstNameInput.addEventListener('input', run);


function run(e){
    console.log('event type: ' + e.type)
    heading.innerText = e.target.value;
}