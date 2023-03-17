const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  const nameInput = document.getElementById("name");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const url = "https://formsubmit.co/ajax/danilo.mazic12@gmail.com";

  const data = {
    Email: emailInput.value,
    Message: messageInput.value,
    Name: nameInput.value,
    Subject: subjectInput.value,
    PhoneNumber: phoneNumberInput.value
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      $("span.success").fadeIn(300).delay(1500).fadeOut(25000);
    })
    .catch(error => {
      console.error('There was a problem sending the email:', error);
    });

  form.reset();
});
