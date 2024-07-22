const emailFind = document.querySelector(".login-form");
emailFind.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formInformation = {
      email: email,
      password: password,
    };
    console.log(formInformation);
    event.currentTarget.reset();
  }
});
