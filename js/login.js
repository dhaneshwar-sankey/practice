const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.querySelector(".login-btn");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.marginTop = "0px"; 
    errorMessage.style.marginBottom = "5px"; 
    errorMessage.style.textAlign = "center";

    if (email === "sankey901@solutions.com" && password === "mindset") {
        window.location.href = "welcome.html";
    } else {
        if (!email || !password) {
            errorMessage.textContent = "All fields are required";
        } else if (email !== "sankey901@solutions.com") {
            errorMessage.textContent = "Invalid email";
        } else if (password !== "mindset") {
            errorMessage.textContent = "Invalid password";
        }

        const existingError = document.querySelector(".error-message");
        if (existingError) {
            existingError.remove();
        }
        errorMessage.classList.add("error-message");
        loginButton.insertAdjacentElement("afterend", errorMessage);
    }
});
