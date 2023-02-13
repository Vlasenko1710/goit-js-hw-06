// const form = document.querySelector('.login-form')

// form.addEventListener('submit', onFormSubmit)

// function onFormSubmit(event) { 
//     event.preventDefault();

//     const formElements = event.currentTarget.elements;

//     console.dir(formElements);

//     const mail = formElements.email.value;
//     const password = formElements.password.value;
// };

const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}