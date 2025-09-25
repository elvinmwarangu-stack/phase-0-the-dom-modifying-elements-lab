// Write your code here!
// Remove the existing <main> element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id to 'victory'
newHeader.id = 'victory';

// Set its text content
newHeader.textContent = 'Your Name is the champion';

// Add it to the document body
document.body.appendChild(newHeader);