
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const requestCards = document.querySelectorAll(".request-card");
  const noRequests = document.getElementById("noRequests");

  // 🔍 Filter access requests based on search input
  searchInput.addEventListener("input", function () {
    const term = searchInput.value.toLowerCase();
    let visibleCount = 0;

    requestCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const match = text.includes(term);
      card.style.display = match ? "block" : "none";
      if (match) visibleCount++;
    });

    noRequests.style.display = visibleCount === 0 ? "block" : "none";
  });

  // ✅ Handle Approve / Reject buttons
  requestCards.forEach(card => {
    const approveBtn = card.querySelector(".approve");
    const rejectBtn = card.querySelector(".reject");

    approveBtn.addEventListener("click", () => {
      alert("Access Approved ✅");
      card.remove();
      checkIfEmpty();
    });

    rejectBtn.addEventListener("click", () => {
      alert("Access Rejected ❌");
      card.remove();
      checkIfEmpty();
    });
  });

  function checkIfEmpty() {
    const visibleCards = document.querySelectorAll(".request-card");
    if (visibleCards.length === 0) {
      noRequests.style.display = "block";
    }
  }
});
