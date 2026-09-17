document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");

  if (!toggle) {
    return;
  }

  const themes = ["system", "light", "dark"];

  const labels = {
    system: "System Theme",
    light: "Light Theme",
    dark: "Dark Theme"
  };

  let currentTheme = localStorage.getItem("theme") || "system";

  function setTheme(theme) {
    currentTheme = theme;

    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    toggle.textContent = labels[theme];
    localStorage.setItem("theme", theme);
  }

  setTheme(currentTheme);

  toggle.addEventListener("click", function (event) {
    event.preventDefault();

    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;

    setTheme(themes[nextIndex]);
  });
});