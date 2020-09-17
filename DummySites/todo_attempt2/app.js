const list = document.querySelector('.todo');

// Add click listner to add todo
document.querySelector('.add-todo').addEventListener('click', () => {
  // Get the input value
  let input = document.querySelector('.input').value;

  // add To input to list
  const li = document.createElement('LI');
  li.textContent = input;
  li.classList.add('todo-li');

  // append li to list
  list.appendChild(li);

  // Clear input
  document.querySelector('.input').value = '';

});

// Select todo-item and add checked class
list.addEventListener('click', (event) => {
  event.target.classList.toggle('checked')
});

// Remove Checked
document.querySelector('.remove-todo').addEventListener('click', () => {
  checked = document.getElementsByClassName('checked')
  for (let i = 0; i < checked.length; i++) {
    checked[i].style.display = 'none'
  }
});
