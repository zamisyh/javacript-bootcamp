document.getElementById('button')
.addEventListener('click', loadData);

function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);
    
    xhr.onprogress = function(){
        console.log('onprogress ready state', this.readyState);
    }

    xhr.onload = function(){
        console.log('onload readyState', this.readyState);
        if (this.status === 200) {
            document.getElementById('output')
            .innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // xhr.onreadystatechange = function(){
    //     console.log('ready state', xhr.readyState);
    //     if (this.readyState === 4 && this.status === 200) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('error occur');
    }

    xhr.send();
}