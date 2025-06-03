
document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.addEventListener("click", function () {
      // You can use history.back() or redirect to a specific page
      // Example: window.history.back();
      // Or:
      window.location.href = "home.html"; // Replace with your actual home or previous page
    });
  }
});
