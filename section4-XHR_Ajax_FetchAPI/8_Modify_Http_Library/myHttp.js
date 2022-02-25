function myHTTP(){
    this.http = new XMLHttpRequest();
}

myHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    this.http.onreadystatechange = function(){
        if (this.readyState === 4) {
            callback(null, this.responseText);
        }else{
            callback('There are errors' + this.status)
        }
    }
    
    this.http.send();
}