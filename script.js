
(function () {
  emailjs.init("ZWbrSIOodgVzcoZDJ"); 
})();


document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    emailjs
      .sendForm("service_b8f6wen", "template_n62c1v2", this) 
      .then(
        function () {
          alert("Message Sent Successfully!");
        },
        function (error) {
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
  });