const fullName = document.getElementById("txtname");
const phone = document.getElementById("txtnumber");
const email = document.getElementById("txtemail");
const persons = document.getElementById("txtperson");
const dateTime = document.getElementById("dateandtime");
const info = document.getElementById("txtinfo");
const form = document.getElementById("form");

const phoneValid = (phone) => {
  const phore =
    /^(?:(?:00|\+)?45)?(?=2|3[01]|4[012]|4911|5[0-3]|6[01]|[78]1|9[123])\d{8}$/;
  return phore.test(phone);
};

const emailValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  formControl = input.parentElement;
  formControl.className = "form-control success";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    showThankYou();
    formReset();
  }
});

const formReset = () => {
  form.reset();
};

const showThankYou = () => {
  alert("Thank you for your submission!");
};

const validateForm = () => {
  const nameValue = fullName.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const personsValue = persons.value.trim();
  const dateTimeValue = dateTime.value.trim();
  const infoValue = info.value.trim();
  let isValid = true;

  if (nameValue === "" || nameValue == null) {
    showError(fullName, "Full name is required");
    isValid = false;
  } else {
    showSuccess(fullName);
  }

  if (phoneValue <= 8) {
    showError(phone, "Phone number is invalid");
    isValid = false;
  } else if (!phoneValid(phoneValue)) {
    showError(phone, "Please provide a danish phone number");
    isValid = false;
  } else {
    showSuccess(phone);
  }

  if (emailValue === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!emailValid(emailValue)) {
    showError(email, "Email is not valid");
    isValid = false;
  } else {
    showSuccess(email);
  }

  if (personsValue === "") {
    showError(persons, "Please specify the number of persons");
    isValid = false;
  } else if (personsValue > 15) {
    showError(
      persons,
      "Sorry but we don't have space for more than 15 people, please contact us."
    );
    isValid = false;
  } else {
    showSuccess(persons);
  }

  if (dateTimeValue === "") {
    showError(dateTime, "Please choose a time");
    isValid = false;
  } else {
    showSuccess(dateTime);
  }

  if (infoValue < 10) {
    showError(info, "Please write at least 10 characters");
    isValid = false;
  } else if (infoValue > 200) {
    showError(info, "Info cannot be longer than 200 characters");
    isValid = false;
  } else {
    showSuccess(info);
  }
  return isValid;
};
