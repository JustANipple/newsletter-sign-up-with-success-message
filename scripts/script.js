const emailInput = document.querySelector("#form_email");
const labelError = document.querySelector("#form_label span");
const subscribeSection = document.querySelector("#subscribe");
const successSection = document.querySelector("#success");

document.querySelector("#form_btn").addEventListener("click", (e) => {
    e.preventDefault();
    if(emailInput.value.trim() === "") {
        emailInput.required = true;
        labelError.style.visibility = "visible";
        labelError.style.opacity = "1";
    }
    if(emailInput.checkValidity()) {
        document.querySelector("#success_email_sent").textContent = emailInput.value;
        subscribeSection.style.animation = "cardRotationHide 1s ease-in-out forwards";
        successSection.style.animation = "cardRotationShow 1s ease-in-out forwards";
    }
});

document.querySelector("#form_email").addEventListener("input", () => {
    if(emailInput.checkValidity()) {
        labelError.style.visibility = "hidden";
        labelError.style.opacity = "0";
    } else {
        labelError.style.visibility = "visible";
        labelError.style.opacity = "1";
    }
});

document.querySelector("#success_btn").addEventListener("click", () => {
    emailInput.value = "";
    subscribeSection.style.animation = "cardRotationShow 1s ease-in-out forwards";
    successSection.style.animation = "cardRotationHide 1s ease-in-out forwards";
});