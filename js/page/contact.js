document.querySelector("#send").addEventListener("click", sendEmail);
function sendEmail(e) {
  let templateParams = {
    email: document.querySelector("#email").value,
    name: document.querySelector("#name").value,
    phone: document.querySelector("#phone").value,
    message: document.querySelector("#message").value,
  };
  e.preventDefault();
  emailjs
    .send("service_piym2ik", "template_prz83db", templateParams)
    .then(() => {
      alert("Thank you for filling out the form.");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send email");
    });
}
