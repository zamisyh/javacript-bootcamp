class myHTTP{
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject('Error :' + err))
        })
    }

    post(url, data){
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => res(data))
                .catch(err => rej('Error : ' + err))
        });
    }

    put(url, data){
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => res(data))
                .catch((err) => rej('Error : ' + err))
        })
    }

    delete(url, data){
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(() => res('Deleted!'))
                .catch(err => rej('Error : ' + err))

        });
    }


}