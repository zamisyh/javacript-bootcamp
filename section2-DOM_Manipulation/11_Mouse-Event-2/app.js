const form = document.querySelector('form')
const submitBtn = document.querySelector('.submit-btn');
const header = document.querySelector('h3')

// submitBtn.addEventListener('click', run)
// submitBtn.addEventListener('dblclick', run)
// submitBtn.addEventListener('mousedown', run);
// submitBtn.addEventListener('mouseup', run);
form.addEventListener('mousemove', run);

function run(e){
    e.preventDefault();
    console.log('mouse type', e.type)
    header.textContent = `x: ${e.offsetX} y: ${e.offsetY}`
}