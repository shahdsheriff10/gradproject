
function selectType(button) {
  const buttons = document.querySelectorAll('.type-buttons button');
  buttons.forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
}

function selectTime(button) {
  const buttons = document.querySelectorAll('.time-slots button');
  buttons.forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
}

function confirmAppointment() {
  const success = document.getElementById("success");
  success.style.display = "block";
  setTimeout(() => {
    success.style.display = "none";
  }, 3000);
}
