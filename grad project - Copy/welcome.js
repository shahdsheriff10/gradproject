function loginRedirect() {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const signUpBtn = document.querySelector(".signup-button");
  if (signUpBtn) {
    signUpBtn.addEventListener("click", function () {
      alert("Sign Up button clicked!");
    });
  }
});
function goToSignUp() {
  window.location.href = "welcome.htm";
}
function goToSignUp() {
  window.location.href = "signup.html";
}



function goToSignUp() {
  const role = document.querySelector('input[name="userRole"]:checked').value;

  if (role === "patient") {
    window.location.href = "signup.html";
  } else if (role === "doctor") {
    window.location.href = "signup.html";
  }
}

