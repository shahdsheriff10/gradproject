
function sendQuestion() {
  const message = document.getElementById("message").value;
  const file = document.getElementById("file").files[0];

  if (!message.trim()) {
    alert("Please enter a message.");
    return;
  }

  alert("Your question has been sent to Dr. Sara Kamal.");
  document.getElementById("message").value = "";
  document.getElementById("file").value = "";
}


document.getElementById('file').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    localStorage.setItem('attachedFileName', file.name);
  }
});

