
function openChat(name) {
  document.getElementById("chatName").innerText = name;
  // Optional: You can set different messages based on name
}

function sendReply() {
  const input = document.getElementById("replyInput");
  if (input.value.trim() !== "") {
    alert("Reply sent: " + input.value);
    input.value = "";
  }
}
