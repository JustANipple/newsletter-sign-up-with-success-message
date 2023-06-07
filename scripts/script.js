document.querySelector("#form_btn").addEventListener("click", (e) => {
    const emailInput = document.querySelector("#form_email");
    if(emailInput.value.trim() === "") {
        emailInput.required = true;
        e.preventDefault();
    }
});