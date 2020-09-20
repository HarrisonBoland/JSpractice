// Read the value of input
const list = document.querySelector('.todo-list');
let close = document.getElementsByClassName('remove-button')

// Add click listener to add todo
document.querySelector('.todo-submit').addEventListener('click', () => {
  // create an li and remove button
  let li = document.createElement('li');
  let removeButton = document.createElement('button');
  removeButton.className = 'remove-button'

  // Add input into list item
  inputValue = document.querySelector('.todo-input').value;
  li.textContent = inputValue;

  // Stlye button
  removeButton.textContent = 'remove';
  removeButton.style.padding = '5px';
  removeButton.style.margin = '5px';
  removeButton.style.backgroundColor = 'red';
  removeButton.style.color = 'white';

  // append item to list
  li.appendChild(removeButton);
  list.appendChild(li);

  // Clear input feild
  document.querySelector('.todo-input').value = '';

  // delete list item
  // for (let i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
});

//Delete Item try 2 with even bubbling
document.querySelector('.todo-list').addEventListener('click', (event) => {
  console.log(event.target.className)
  if (event.target.className === 'remove-button') {
    //event.target.style.display = 'none'
    let remove = event.target.parentNode
    console.log(remove)
    let parentNode = remove.parentNode
    console.log(parentNode)
    parentNode.removeChild(remove)
  }
})

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

document.querySelector('.check').addEventListener('click', () => {
  let checked = document.getElementsByClassName('checked');
  for (let i = 0; i < checked.length; i ++) {
    checked[i].style.display = 'none'
  }
})