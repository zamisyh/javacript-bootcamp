db.collection('todos').orderBy('title').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    // console.log(changes);

    changes.forEach(change => {
        if (change.type == 'added') {
            console.log(change.doc.data())
        }else if(change.type == 'removed'){
            console.log(removed)
        }else if(change.type == 'modified'){
            console.log('modified')
        }
    });

})