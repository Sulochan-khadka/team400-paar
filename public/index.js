const lightModeToggle = document.getElementById("lightModeToggle");
const darkModeToggle = document.getElementById("darkModeToggle");

lightModeToggle.addEventListener("click", () => {
  document.documentElement.classList.remove("dark-mode-variables");
  lightModeToggle.classList.add("active");
  darkModeToggle.classList.remove("active");
});

darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.add("dark-mode-variables");
  lightModeToggle.classList.remove("active");
  darkModeToggle.classList.add("active");
});
