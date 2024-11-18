import "./styles.css";
import { passwordValidator } from "./formValidator";

const name = document.querySelector("#name");
const nameChecksContainer = document.querySelector(".name.checks-container");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordChecksContainer = document.querySelector(".password.checks-container");

password.addEventListener("focus", () => {
    passwordChecksContainer.classList.add("visible");
});

password.addEventListener("blur", () => {
    passwordChecksContainer.classList.remove("visible");
});

password.addEventListener("keyup", () => {
    passwordValidator(password.value);
});

name.addEventListener("blur", () => {
    if (name.validity.valueMissing) {
        nameChecksContainer.classList.add("visible");
    } else {
        if (nameChecksContainer.classList.contains("visible")) {
            nameChecksContainer.classList.remove("visible");
        };
    };
});

