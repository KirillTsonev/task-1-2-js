const section = document.querySelector(".registerSection");
const welcome = document.querySelector(".welcome");

const fname = document.querySelector(".fname");
const fnameWarningShort = document.querySelector(".warningFnameShort");
const fnameWarningLong = document.querySelector(".warningFnameLong");
const fnameWarningLatin = document.querySelector(".warningFnameLatin");

const lname = document.querySelector(".lname");
const lnameWarningShort = document.querySelector(".warningLnameShort");
const lnameWarningLong = document.querySelector(".warningLnameLong");
const lnameWarningLatin = document.querySelector(".warningLnameLatin");

const email = document.querySelector(".email");
const emailWarning = document.querySelector(".warningEmail");

const password = document.querySelector(".password");
const passwordWarningShort = document.querySelector(".warningPasswordShort");
const passwordWarningLong = document.querySelector(".warningPasswordLong");
const passwordWarningLatin = document.querySelector(".warningPasswordLatin");
const passwordWarningLetter = document.querySelector(".warningPasswordLetter");
const passwordWarningDigit = document.querySelector(".warningPasswordDigit");

const confirmPassword = document.querySelector(".confirmPassword");
const confirmPasswordWarning = document.querySelector(".warningConfirmPassword");

const termsCheck = document.querySelector(".termsCheckbox");
const reqsCheck = document.querySelector(".reqsCheckbox");

const register = document.querySelector(".submitRegister");

let fnameString;
let lnameString;
let emailString;
let passwordString;
let confirmPasswordString;

let allValid = [];

function validateName(nameString, name, warning1, warning2, warning3) {
    if (nameString.length < 2) {
        name.classList.add("wrongCredential");
        warning1.classList.add("warningActive");
    } else {
        warning1.classList.remove("warningActive");
    }

    if (nameString.length > 20) {
        name.classList.add("wrongCredential");
        warning2.classList.add("warningActive");
    } else {
        warning2.classList.remove("warningActive");
    }

    if (!/^[a-zA-Z]+$/.test(nameString)) {
        name.classList.add("wrongCredential");
        warning3.classList.add("warningActive");
    } else {
        warning3.classList.remove("warningActive");
    }

    if (nameString.length > 1 && /^[a-zA-Z]+$/.test(nameString) && nameString.length < 21) {
        name.classList.remove("wrongCredential");
        allValid[0] = true;
        allValid[1] = true;
    }
}

function validateEmail() {
    if (/^[\w\.]+@[\w]+\.[\w]{2,4}$/.test(emailString)) {
        email.classList.remove("wrongCredential");
        emailWarning.classList.remove("warningActive");
        allValid[2] = true;
    } else {
        email.classList.add("wrongCredential");
        emailWarning.classList.add("warningActive");
    }
}

function validatePassword() {
    if (passwordString.length < 6) {
        password.classList.add("wrongCredential");
        passwordWarningShort.classList.add("warningActive");
    } else {
        passwordWarningShort.classList.remove("warningActive");
    }

    if (passwordString.length > 25) {
        password.classList.add("wrongCredential");
        passwordWarningLong.classList.add("warningActive");
    } else {
        passwordWarningLong.classList.remove("warningActive");
    }

    if (!/^[a-zA-Z0-9]*$/.test(passwordString)) {
        password.classList.add("wrongCredential");
        passwordWarningLatin.classList.add("warningActive");
    } else {
        passwordWarningLatin.classList.remove("warningActive");
    }

    if (!/[a-zA-Z]/.test(passwordString)) {
        password.classList.add("wrongCredential");
        passwordWarningLetter.classList.add("warningActive");
    } else {
        passwordWarningLetter.classList.remove("warningActive");
    }

    if (!/[0-9]/.test(passwordString)) {
        password.classList.add("wrongCredential");
        passwordWarningDigit.classList.add("warningActive");
    } else {
        passwordWarningDigit.classList.remove("warningActive");
    }

    if (passwordString.length > 5 &&
        /^[a-zA-Z0-9]*$/.test(passwordString) && 
        passwordString.length < 26 &&
        /[a-zA-Z]/.test(passwordString) &&
        /[0-9]/.test(passwordString)) {
        password.classList.remove("wrongCredential");
        allValid[3] = true;
    }
}

function validateConfirmPassword() {
    if (passwordString !== confirmPasswordString) {
        confirmPassword.classList.add("wrongCredential");
        confirmPasswordWarning.classList.add("warningActive");
    } else {
        confirmPassword.classList.remove("wrongCredential");
        confirmPasswordWarning.classList.remove("warningActive");
        allValid[4] = true;
    }
}

fname.addEventListener("input", (e) => {
    fnameString = e.target.value;
    validateName(fnameString, fname, fnameWarningShort, fnameWarningLong, fnameWarningLatin);
});

fname.addEventListener("paste", (e) => {
    fnameString = e.clipboardData.getData("text");
    validateName(fnameString, fname, fnameWarningShort, fnameWarningLong, fnameWarningLatin);
});

lname.addEventListener("input", (e) => {
    lnameString = e.target.value;
    validateName(lnameString, lname, lnameWarningShort, lnameWarningLong, lnameWarningLatin);
});

lname.addEventListener("paste", (e) => {
    lnameString = e.clipboardData.getData("text");
    validateName(lnameString, lname, lnameWarningShort, lnameWarningLong, lnameWarningLatin);
});

email.addEventListener("input", (e) => {
    emailString = e.target.value;
    validateEmail();
});

email.addEventListener("paste", (e) => {
    emailString = e.clipboardData.getData("text");
    validateEmail();
});

password.addEventListener("input", (e) => {
    passwordString = e.target.value;
    validatePassword();
});

password.addEventListener("paste", (e) => {
    passwordString = e.clipboardData.getData("text");
    validatePassword();
});

confirmPassword.addEventListener("input", (e) => {
    confirmPasswordString = e.target.value;
    validateConfirmPassword();
});

confirmPassword.addEventListener("paste", (e) => {
    confirmPasswordString = e.clipboardData.getData("text");
    validateConfirmPassword();
});

register.addEventListener("click", (e) => {
    if (allValid.every(a => a === true) && allValid.length === 5 && termsCheck.checked && reqsCheck.checked) {
        e.preventDefault();
        console.log({
            "First name": fnameString,
            "Last name": lnameString,
            "Email": emailString,
            "Password": passwordString,
            "Confirm password": confirmPasswordString
        })
        section.classList.add("hidden");
        welcome.classList.remove("hidden");
    }
});