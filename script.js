/*met en place le bouton de chngement de theme*/
(function () {
  const root = document.documentElement;

  document.addEventListener("DOMContentLoaded", function () {
      if (!root.hasAttribute("data-theme")) {
          const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
          root.setAttribute("data-theme", prefersDarkScheme ? "dark" : "light");
      }

      const togglers = document.querySelectorAll("[data-theme-toggler]");
      togglers.forEach((toggler) => {
          toggler.addEventListener("click", toggleDarkMode);
      });
  });

  function toggleDarkMode() {
      const currentTheme = root.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", newTheme);
  }
})();
/*met en place le bouton de la barre noir*/
function revealWord(element) {
    element.innerHTML = 'Pour le meilleur des chauves :)';
  }