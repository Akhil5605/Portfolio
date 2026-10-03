// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleSkills");
  const skillsList = document.querySelector(".skills ul");
  const darkModeBtn = document.getElementById("darkMode");

  // Toggle skills visibility
  toggleBtn.addEventListener("click", () => {
    if (skillsList.style.display === "none") {
      skillsList.style.display = "block";
      toggleBtn.textContent = "Hide Skills";
    } else {
      skillsList.style.display = "none";
      toggleBtn.textContent = "Show Skills";
    }
  });

  // Dark mode toggle
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
