window.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!inputValidation(form)) {
        return;
      }
      sendEmail(form);
      emptyInput(form);
    });
  });
});

function inputValidation(e) {
  let inputElements = e.querySelectorAll("input");
  let name = inputElements[0].value;
  let phone = inputElements[1].value;
  let email = inputElements[2].value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phonePattern = /^(\+84|0)[3|5|7|8|9][0-9]{8}$/;
  let namePattern = /^[a-zA-ZÀ-ỹ\s]{2,50}$/;
  if (!namePattern.test(name)) {
    alert(
      "Vui lòng nhập tên hợp lệ (chỉ chứa chữ cái và khoảng trắng, từ 2-50 ký tự)."
    );
    return false;
  }
  if (!phonePattern.test(phone)) {
    alert(
      "Vui lòng nhập số điện thoại hợp lệ (bắt đầu bằng +84 hoặc 0, theo sau là 9 chữ số)."
    );
    return false;
  }
  if (email && !emailPattern.test(email)) {
    alert("Vui lòng nhập địa chỉ email hợp lệ.");
    return false;
  }
  return true;
}

function emptyInput(e) {
  let inputElements = e.querySelectorAll("input");
  inputElements.forEach((input) => {
    input.value = "";
  });
}

function sendEmail(e) {
  let inputElements = e.querySelectorAll("input");
  let templateParams = {
    email: inputElements[2].value,
    name: inputElements[0].value,
    phone: inputElements[1].value,
  };
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
