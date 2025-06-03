
document.addEventListener("DOMContentLoaded", function () {
  // Search Doctor functionality (basic simulation)
  const searchInput = document.querySelector(".search-box input");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const doctorCards = document.querySelectorAll(".doctor-card");

    doctorCards.forEach((card) => {
      const name = card.textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Book Now and Join buttons (optional alert to simulate action)
  const buttons = document.querySelectorAll(".book-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("Button clicked: " + btn.textContent);
      // Replace with actual navigation or appointment logic if needed
    });
  });
});
