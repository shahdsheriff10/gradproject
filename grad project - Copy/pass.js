
function sendReset() {
  const email = document.getElementById("email").value;
  if (email.trim() === "") {
    alert("Please enter your registered email.");
    return;
  }
  alert("Reset link sent to: " + email);
}
