
function selectMethod(button) {
  const buttons = document.querySelectorAll(".payment-methods button");
  buttons.forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
}

function submitPayment() {
  const msg = document.getElementById("successMsg");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 4000);
}
