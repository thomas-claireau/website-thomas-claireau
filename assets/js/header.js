document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  if (!header) return;

  // toggle theme
  const toggleTheme = header.querySelector(".toggle-theme");

  toggleTheme.addEventListener("click", () => {
    toggleTheme.classList.toggle("light");
    toggleTheme.classList.toggle("dark");
  });
});
