document.querySelector('#first_name')
.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('first name');
});

document.querySelector('.inputform')
.addEventListener('click', function() {
    console.log('input form');
})
document.querySelector('.container')
.addEventListener('click', function() {
    console.log('container');
})

document.addEventListener('click', function() {
    console.log('input form');
})