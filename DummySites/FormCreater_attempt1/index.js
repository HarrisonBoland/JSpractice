// Add click listner to form button
document.querySelector('.form-button').addEventListener('click', (event) => {
  event.preventDefault();

  // Get values of each input
  let name, email, phone, description;
  name = document.querySelector('.form-input_name').value;
  email = document.querySelector('.form-input_email').value;
  phone = document.querySelector('.form-input_phone').value;
  description = document.querySelector('.form-input_desc').value;

  // Create a div inside card
  const card = document.querySelector('.card');
  let div = document.createElement('DIV');
  div.classList.add('card-item');
  card.appendChild(div);

  // Create span's based on input values and diplay them on card
  let span_name = document.createElement('SPAN');
  span_name.textContent = name;
  span_name.style.display = 'block';
  div.appendChild(span_name);

  let span_email = document.createElement('SPAN');
  span_email.textContent = email;
  span_email.style.display = 'block';
  div.appendChild(span_email);

  let span_phone = document.createElement('SPAN');
  span_phone.textContent = phone;
  span_phone.style.display = 'block';
  div.appendChild(span_phone);

  let span_description = document.createElement('SPAN');
  span_description.textContent = description;
  span_description.style.display = 'block';
  div.appendChild(span_description);

  // create a remove card button
  let button = document.createElement('BUTTON');
  button.textContent = 'DELETE';
  button.classList.add('remove_button')
  button.style.backgroundColor = 'red';
  button.style.padding = '5px';
  button.style.color = 'white';
  button.style.margin = '10px'
  div.appendChild(button);

  // Remove card
  let removeButton = document.getElementsByClassName('remove_button'); 
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', () => {
      let div = removeButton[i].parentElement
      div.style.display = 'none'
    })
  }
});
