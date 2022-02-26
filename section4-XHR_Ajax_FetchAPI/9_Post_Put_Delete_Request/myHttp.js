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

myHTTP.prototype.post = function(url, data, cb) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader(
        'Content-type', 'application/json'
    );
    this.http.onreadystatechange = function(){
        cb(null, this.responseText);
    }

    this.http.send(JSON.stringify(data))
}


myHTTP.prototype.put = function(url, data, cb) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader(
        'Content-type', 'application/json'
    );
    this.http.onreadystatechange = function() {
        cb(null, this.responseText);
    }

    this.http.send(JSON.stringify(data));
}

myHTTP.prototype.delete = function(url, cb) {
    this.http.open('DELETE', url, true);
    this.http.onreadystatechange = function() {
        if (this.readyState === 4) {
            cb(null, 'The post is deleted')
        }else{
            cb('There are errors' + this.status)
        }
    }

    this.http.send();
}
