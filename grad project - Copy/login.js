
// Show/hide password toggle
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.querySelector(".toggle-password");

  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.textContent = type === "password" ? "👁️" : "🙈";
    });
  }

  // Optional: Click the yellow circle arrow to go back
  const backButton = document.querySelector(".back-button");
  if (backButton) {
    backButton.addEventListener("click", function () {
      alert("Back button clicked!"); // You can change this to actual navigation
    });
  }
});

// Go to Sign Up page
function goToSignUp() {
  window.location.href = "signup.html"; // Make sure signup.html exists
}
function goToLogin() {
  window.location.href = "login.html";
}

