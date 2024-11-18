import "./styles.css";
import { passwordValidator } from "./formValidator";

const password = document.querySelector("#password");
const checksContainer = document.querySelector(".checks-container");

password.addEventListener("focus", () => {
    checksContainer.classList.add("visible");
});

password.addEventListener("blur", () => {
    checksContainer.classList.remove("visible");
});

password.addEventListener("keyup", () => {
    passwordValidator(password.value);
})