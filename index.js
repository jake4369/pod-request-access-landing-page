const input = document.getElementById("email-input");
const inputLabel = document.querySelector(".input-label");
const submitButton = document.getElementById("submit-btn");

let emailValid;

function error(input) {
  inputLabel.style.display = "block";
  emailValid = false;
  if (window.innerWidth < 768) {
    input.style.marginBottom = "8px";
    inputLabel.style.marginBottom = "8px";
  }
}

function success(input) {
  inputLabel.style.display = "none";
  emailValid = true;
  input.style.marginBottom = "16px";
}

function checkEmail() {
  const email = input.value;
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email) || email === "") {
    error(input);
  } else {
    success(input);
  }
}

submitButton.addEventListener("click", (e) => {
  checkEmail();

  if (!emailValid) {
    e.preventDefault();
  } else {
    input.value = "";
  }
});
