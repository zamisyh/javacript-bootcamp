// document.querySelector('#submit-btn').
// addEventListener('click', function(e) {
//     e.preventDefault()
//     console.log('Hallo')
// })


document.querySelector('#submit-btn').
addEventListener('click', onClick)

function onClick(e){
    e.preventDefault()
    let item;

    item = e.target.id;
    item = e.type // click
    item = e.timeStamp
    item = e.clientX;
    item = e.clientY;
    item = e.offsetX;
    item = e.offsetY;
    e.target.innerText = 'Hallo, clicked!'
    console.log(item);
}