const email = document.querySelector(".email");
const password = document.querySelector(".password");
const emailWarning = document.querySelector(".warningEmail");
const passwordWarning = document.querySelector(".warningPassword");
const login = document.querySelector(".submitLogin");
const success = document.querySelector(".success");

let emailString;
let passwordString;

email.addEventListener("input", (e) => {
    emailString = e.target.value;
});

email.addEventListener("paste", (e) => {
    emailString = e.clipboardData.getData("text");
});

password.addEventListener("input", (e) => {
    passwordString = e.target.value;
});

password.addEventListener("paste", (e) => {
    passwordString = e.clipboardData.getData("text");
});

login.addEventListener("click", (e) => {
    if (emailString !== "hello@ab.bg" && /@.+/.test(emailString)) {
        email.classList.add("wrongCredential")
        emailWarning.classList.add("warningActive")
    }
    if (passwordString !== "1234" && passwordString) {
        password.classList.add("wrongCredential")
        passwordWarning.classList.add("warningActive")
    }
    if (emailString === "hello@ab.bg") {
        email.classList.remove("wrongCredential")
        emailWarning.classList.remove("warningActive")
    }
    if (passwordString === "1234") {
        password.classList.remove("wrongCredential")
        passwordWarning.classList.remove("warningActive")
    }
    if (emailString === "hello@ab.bg" && passwordString === "1234") {
        e.preventDefault()
        success.classList.add("successActive")
        console.log({
            username: emailString,
            password: passwordString
        })
    } else {
        passwordString = ""
        password.value = ""
    }
});