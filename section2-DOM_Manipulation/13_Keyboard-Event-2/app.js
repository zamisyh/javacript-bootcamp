const firstNameInput = document.getElementById('first_name');
const heading = document.querySelector('h3');
const form = document.querySelector('form');
const select = document.querySelector('select');
form.addEventListener('submit', run)
select.addEventListener('change', run)


function run(e){
    e.preventDefault()
    console.log('event type: ' + e.type)
    heading.innerText = e.target.value;
}