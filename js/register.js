const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const passwordInput1 = document.getElementById("password1");
const passwordInput2 = document.getElementById("password2");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const password1 = passwordInput1.value;
    const password2 = passwordInput2.value;

    if (!name || !phone || !email || !password1 || !password2) {
        alert("All fields are required");
        return;
    };

    // Create modal overlay
    const modalOverlay = document.createElement("div");
    modalOverlay.style.position = "fixed";
    modalOverlay.style.top = "0";
    modalOverlay.style.left = "0";
    modalOverlay.style.width = "100vw";
    modalOverlay.style.height = "100vh";
    modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modalOverlay.style.display = "flex";
    modalOverlay.style.alignItems = "center";
    modalOverlay.style.justifyContent = "center";
    modalOverlay.style.zIndex = "1000";

    // Create modal box
    const modalBox = document.createElement("div");
    modalBox.style.backgroundColor = "white";
    modalBox.style.padding = "20px";
    modalBox.style.borderRadius = "10px";
    modalBox.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    modalBox.style.textAlign = "center";
    modalBox.style.width = "300px";

    // Success message
    const message = document.createElement("p");
    message.textContent = "Registration Successful!";
    message.style.fontSize = "18px";
    message.style.marginBottom = "15px";

    

    // Login button
    const loginButton = document.createElement("button");
    loginButton.textContent = "Go to Login";
    loginButton.style.padding = "8px 15px";
    loginButton.style.border = "none";
    loginButton.style.backgroundColor = "#04c35c";
    loginButton.style.color = "white";
    loginButton.style.borderRadius = "5px";
    loginButton.style.cursor = "pointer";
    loginButton.addEventListener("click", function() {
        window.location.href = "login.html"; 
    });

    // Close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.padding = "8px 15px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "#dc3545";
    closeButton.style.color = "white";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginLeft = "10px";
    closeButton.addEventListener("click", function() {
        document.body.removeChild(modalOverlay);
    });

    // Append elements
    modalBox.appendChild(message);
    modalBox.appendChild(loginButton);
    modalBox.appendChild(closeButton);
    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);
});
