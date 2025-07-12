function sendEmail() {
  let templateParams = {
    email: document.querySelector("#email").value,
    name: document.querySelector("#name").value,
    message: document.querySelector("#message").value,
  };
  console.log(1);
  emailjs
    .send("service_piym2ik", "template_prz83db", templateParams)
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send email");
    });
  //   emailjs.send("service_piym2ik", "template_prz83db", templateParams).then(
  //     (response) => {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     (error) => {
  //       console.log("FAILED...", error);
  //     }
  //   );
}
