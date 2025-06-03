
document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.addEventListener("click", function () {
      // Option 1: Go back to the previous page
      window.history.back();

      // Option 2: Or redirect directly to history page
      // window.location.href = "history.html";
    });
  }
});
