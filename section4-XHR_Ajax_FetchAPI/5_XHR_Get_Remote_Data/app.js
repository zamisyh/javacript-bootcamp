document.getElementById('getData').
addEventListener('click', getData);

function getData(e){
    e.preventDefault();

    const number = document.getElementById('number').value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 ) {
            const response = JSON.parse(this.responseText);
            let output = '';

            if (response.type === 'success') {
                response.value.forEach(function(item){
                    output += `<li>${item.joke}</li>`
                });
            }else{
                output += '<li>There is an error</li>'
            }

            document.querySelector('.jokes').innerHTML = output

        }
    }

    xhr.send()
}