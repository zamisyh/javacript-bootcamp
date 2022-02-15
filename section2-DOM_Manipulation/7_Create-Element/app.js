const li = document.createElement('li')
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item')
li.appendChild(document.createTextNode('A new list'))

//create tag
const link = document.createElement('a');
link.className = 'secondary-content';

//add icon
link.innerHTML = '<i class="material-icons">grade</i>';
li.appendChild(link)
document.querySelector('ul.collection').appendChild(li)