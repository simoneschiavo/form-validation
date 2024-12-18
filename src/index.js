import "./styles.css";
import { passwordValidator } from "./formValidator";

const name = document.querySelector("#name");
const nameChecksContainer = document.querySelector(".name.checks-container");
const email = document.querySelector("#email");
const emailChecksContainer = document.querySelector(".email.checks-container");
const password = document.querySelector("#password");
const passwordChecksContainer = document.querySelector(
  ".password.checks-container"
);
const submitButton = document.querySelector("form > button");

password.addEventListener("focus", () => {
  passwordChecksContainer.classList.add("visible");
});

password.addEventListener("blur", () => {
  passwordChecksContainer.classList.remove("visible");
});

password.addEventListener("keyup", () => {
  passwordValidator(password.value);
  if (passwordValidator(password.value)) {
    if (!password.classList.contains("input-validated")) {
      password.classList.add("input-validated");
      enableButton(submitButton);
    }
  }
});

name.addEventListener("blur", () => {
  if (name.validity.valueMissing) {
    nameChecksContainer.classList.add("visible");
  } else {
    if (nameChecksContainer.classList.contains("visible")) {
      nameChecksContainer.classList.remove("visible");
    }
    if (!name.classList.contains("input-validated")) {
      name.classList.add("input-validated");
      enableButton(submitButton);
    }
  }
});

email.addEventListener("blur", () => {
  const emailRequiredCheck = document.querySelector(
    ".email-checks > #required-field"
  );
  const emailPatternCheck = document.querySelector(
    ".email-checks > #wrong-pattern"
  );

  if (email.validity.valueMissing || email.validity.patternMismatch) {
    emailChecksContainer.classList.add("visible");
  } else {
    if (emailChecksContainer.classList.contains("visible")) {
      emailChecksContainer.classList.remove("visible");
    }
    if (!email.classList.contains("input-validated")) {
      email.classList.add("input-validated");
      enableButton(submitButton);
    }
  }

  if (!email.validity.valueMissing) {
    emailRequiredCheck.classList.add("validated");
  } else {
    emailRequiredCheck.classList.remove("validated");
  }

  if (email.value && !email.validity.patternMismatch) {
    emailPatternCheck.classList.add("validated");
  } else {
    emailPatternCheck.classList.remove("validated");
  }
});

function enableButton(button) {
  if (
    name.classList.contains("input-validated") &&
    email.classList.contains("input-validated") &&
    password.classList.contains("input-validated")
  ) {
    button.disabled = false;
  }
}
