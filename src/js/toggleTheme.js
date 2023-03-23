function toggleTheme() {
  const DARK_THEME_PATH = "src/bootstrap2/bootstrap-dark.min.css";
  const LIGHT_THEME_PATH = "src/bootstrap2/bootstrap.min.css";
  const DARK_STYLE_LINK = document.getElementById("theme-style");
  const THEME_TOGGLER = document.getElementById("mode");

  if (THEME_TOGGLER.checked) {
    DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
  } else {
    DARK_STYLE_LINK.setAttribute("href", LIGHT_THEME_PATH);
  }
}

export default toggleTheme;
