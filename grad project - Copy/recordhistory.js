document.addEventListener("DOMContentLoaded", function () {
  // Tab toggle
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      console.log(`Selected tab: ${tab.textContent}`);
    });
  });

  // Back button
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.history.back(); // or window.location.href = "home.html";
    });
  }

  // ✅ NO NEED FOR THIS IF YOU USE <a href="profile.html">
  // const profileIcon = document.querySelector(".profile-icon");
  // if (profileIcon) {
  //   profileIcon.addEventListener("click", () => {
  //     window.location.href = "profile.html";
  //   });
  // }
});


