const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();


    // Επικύρωση σύνθετων κανόνων επικύρωσης
    const password = form.querySelector("[name='password']");
    const confirmPassword = form.querySelector("[name='confirm_password']");
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Οι δύο κωδικοί πρόσβασης δεν ταιριάζουν");
    } else {
        confirmPassword.setCustomValidity("");
    }

    // Εμφάνιση μηνυμάτων λάθους
    for (const element of form.querySelectorAll("[data-validation-error]")) {
        element.classList.add("is-invalid");
    }

    // Αποστολή της φόρμας μόνο αν όλα τα πεδία είναι έγκυρα
    if (form.checkValidity()) {
        form.submit();
    }
});
