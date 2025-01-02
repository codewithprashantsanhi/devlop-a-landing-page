document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('response-message');
  
    if (email) {
      responseMessage.textContent = `Thank you for signing up, ${email}!`;
      responseMessage.style.color = 'green';
      document.getElementById('email').value = ''; 
    } else {
      responseMessage.textContent = 'Please enter a valid email address.';
      responseMessage.style.color = 'red';
    }
  });
  