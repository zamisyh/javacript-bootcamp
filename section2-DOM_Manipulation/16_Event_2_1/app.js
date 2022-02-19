document.body.addEventListener('click', addFavorite)

function addFavorite(e){
    console.log(e.target);
    if (e.target.parentElement.classList.contains('add-favorite')) {
        if (e.target.parentElement.parentElement.style
            ['background-color'] == 'yellow') {
            e.target.parentElement.parentElement.style['background-color'] = 'white'
        } else {
            e.target.parentElement.parentElement.style['background-color'] = 'yellow'
        }   
    }
}
