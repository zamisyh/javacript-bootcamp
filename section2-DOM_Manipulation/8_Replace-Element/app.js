const oldHeading = document.getElementById('name-title')
const newHeading = document.createElement('h2')
newHeading.id = 'new-title';
newHeading.appendChild(document.createTextNode('New Title'));

const header = document.querySelector('.collection-header');
header.replaceChild(newHeading, oldHeading);