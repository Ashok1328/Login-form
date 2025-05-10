const Form = document.getElementById("form");
const Firstname = document.getElementById("firstname");
const Email = document.getElementById("email");
const Password = document.getElementById("pass");
const Repeatpassword = document.getElementById("repeatpass");
const error = document.getElementById("error");

Form.addEventListener("submit", (e) => {
  let errors = [];

  if (Firstname) {
    errors = getSignUpFormErrors(
      Firstname.value,
      Email.value,
      Password.value,
      Repeatpassword.value
    );
  } else {
    errors = getLoginFormErrors(Email.value, Password.value);
  }

  if (errors.length > 0) {
    e.preventDefault();
    error.innerText = error.join(". ");
  }
});

function getSignUpFormErrors(firstname, email, password, repeatpassword) {
  let errors = [];
  if (firstname === "" || firstname == null) {
    errors.push("First name is required");
    Firstname.parentElement.classList.add("incorrect");
  }
  if (email === "" || email == null) {
    errors.push("Email is required");
    Email.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    Password.parentElement.classList.add("incorrect");
  }
  if (password.length > 8) {
    errors.push("Password must be 8 character long");
    password.parentElement.classList.add("incorrect");
  }
  if (password !== repeatpassword) {
    errors.push("Password does not match repeated password");
    Password.parentElement.classList.add("incorrect");
    Repeatpassword.parentElement.classList.add("incorrect");
  }
  return errors;
}

function getLoginFormErrors(email, password){
  let errors = []

  if (email === "" || email == null) {
    errors.push("Email is required");
    Email.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    Password.parentElement.classList.add("incorrect");
  }
  if (password.length > 8) {
    errors.push("Password must be 8 character long");
    password.parentElement.classList.add("incorrect");
  }
  return errors;
}

const allInputs = [Firstname, Email, Password, Repeatpassword].filter(input => input != null)
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      error.innerText = "";
    }
  });
});
