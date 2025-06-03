document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const userRole = params.get("role");

  const formTitle = document.getElementById("form-title");
  formTitle.textContent = `Sign Up as ${userRole || "..."}`;

  if (userRole === "doctor") {
    const label = document.createElement("label");
    label.setAttribute("for", "specialization");
    label.textContent = "Specialization";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "specialization";
    input.placeholder = "e.g., Neurologist";

    const formSection = document.querySelector(".form-section");
    const signupBtn = document.querySelector(".signup-btn");

    formSection.insertBefore(label, signupBtn);
    formSection.insertBefore(input, signupBtn);
  }

  const passwordInput = document.getElementById("password");
  const togglePassword = document.querySelector(".toggle-password");
  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.textContent = type === "password" ? "👁️" : "🙈";
    });
  }

  const backButton = document.querySelector(".back-button");
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "welcome.html"; // Adjust if needed
    });
  }

  const signupBtn = document.querySelector(".signup-btn");
  signupBtn.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const specializationInput = document.getElementById("specialization");
    const specialization = specializationInput ? specializationInput.value.trim() : null;

    const data = {
      role: userRole,
      name,
      email,
      password,
      ...(specialization && { specialization })
    };

    console.log("Form Submitted:", data);
    alert(`${userRole} signed up successfully!\n\n${JSON.stringify(data, null, 2)}`);
  });
});

function goToLogin() {
  window.location.href = "login.html";
}

function goToDashboard() {
  window.location.href = "dashboard.html";
}





