document.getElementById('button1')
.addEventListener('click', getText)

function getText(){
   fetch('data.txt').then(function(res) {
        return (res.text())
   }).then((data) => {
        document.getElementById('output').innerHTML = `<h3>${data}</h3>`
   }).catch((err) => {
        console.log('ERROR : ' + err)
   });
}