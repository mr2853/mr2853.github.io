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


const lang = navigator.language;
if(lang.indexOf("en") != -1) {
  document.getElementById("name").placeholder = "First and last name";
  document.getElementById("phoneNumber").placeholder = "Mobile number";
  document.getElementById("email").placeholder = "Email";
  document.getElementById("subject").placeholder = "Subject";
  document.getElementById("message").placeholder = "Message";

  document.getElementById("contactInfoTitle").innerHTML = "Our location:";
  document.getElementById("submitEmailButton").innerHTML = "Send email";
  document.getElementById("pageTitle").innerHTML = "Contact";
  document.getElementById("formTitle").innerHTML = "Send us an email:";
  document.getElementById("emailSentMessage").innerHTML = "The email has been successfully sent. We will respond as soon as possible. Thank you.";

} else if(lang.indexOf("de") != -1) {
  document.getElementById("name").placeholder = "Vor- und Nachname";
  document.getElementById("phoneNumber").placeholder = "Handynummer";
  document.getElementById("email").placeholder = "E-Mail";
  document.getElementById("subject").placeholder = "Betreff";
  document.getElementById("message").placeholder = "Nachricht";

  document.getElementById("contactInfoTitle").innerHTML = "Unser Standort:";
  document.getElementById("submitEmailButton").innerHTML = "E-Mail senden";
  document.getElementById("pageTitle").innerHTML = "Kontakt";
  document.getElementById("formTitle").innerHTML = "Senden Sie uns eine E-Mail:";
  document.getElementById("emailSentMessage").innerHTML = "Die E-Mail wurde erfolgreich versendet. Wir werden so schnell wie möglich antworten. Danke.";
  
} else {
  document.getElementById("name").placeholder = "Ime i prezime";
  document.getElementById("phoneNumber").placeholder = "Broj mobilnog";
  document.getElementById("email").placeholder = "Email";
  document.getElementById("subject").placeholder = "Naslov";
  document.getElementById("message").placeholder = "Poruka";
  
  document.getElementById("contactInfoTitle").innerHTML = "Naša lokacija:";
  document.getElementById("submitEmailButton").innerHTML = "Pošalji email";
  document.getElementById("pageTitle").innerHTML = "Kontakt";
  document.getElementById("formTitle").innerHTML = "Pošaljite nam email:";
  document.getElementById("emailSentMessage").innerHTML = "Email je uspešno poslat. Odgovorićemo Vam u najkraćem roku. Hvala.";
}