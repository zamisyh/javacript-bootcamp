function myHTTP(){
    this.http = new XMLHttpRequest();
}

myHTTP.prototype.get = function(url){
    this.http.open('GET', url, true);
    this.http.onreadystatechange = function(){
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    }

    this.http.send();
}