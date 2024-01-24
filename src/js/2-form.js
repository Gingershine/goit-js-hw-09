const form = document.querySelector(".feedback-form");
const message = form.elements.message;
const email = form.elements.email;
const LSKey = 'feedback-form-state';

populateForm();

form.addEventListener ("submit", formSubmit);
form.addEventListener("input", textareaInput);

function textareaInput(event) {
  const inputForm = {};
  inputForm.email = event.currentTarget.elements.email.value.trim();
  inputForm.message = event.currentTarget.elements.message.value.trim();
  localStorage.setItem(LSKey, JSON.stringify(inputForm));
}

function populateForm() {
  const savedInfo = JSON.parse(localStorage.getItem(LSKey));
  if (savedInfo) {
    email.value = savedInfo.email.trim();
    message.value = savedInfo.message.trim();
  }
}

function formSubmit(event) {
  event.preventDefault();
   const email = event.currentTarget.elements.email.value.trim();
   const message = event.currentTarget.elements.message.value.trim();
   if (email === '' || message === '') {
    alert('Please fill in all the fields!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(LSKey)));
  localStorage.removeItem(LSKey);
  form.reset();
}