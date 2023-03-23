// getWord is a function that fetch the meaning of a word from DIctionary Api
const inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keypress", (e) => {
  const key = e.keyCode || e.which;
  if (key === 13) {
    getWord(e);
  }
});

// Change document font family according to select element value
const choice = document.getElementById("fontChoice");
choice.addEventListener(
  "change",
  (e) => {
    e.preventDefault();
    toggleFont(e);
  },
  false
);

// Change document theme : dark light
document.getElementById("mode").addEventListener("change", () => {
  const DARK_THEME_PATH = "src/bootstrap2/bootstrap-dark.min.css";
  const LIGHT_THEME_PATH = "src/bootstrap2/bootstrap.min.css";
  const DARK_STYLE_LINK = document.getElementById("theme-style");
  const THEME_TOGGLER = document.getElementById("mode");

  if (THEME_TOGGLER.checked) {
    DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
  } else {
    DARK_STYLE_LINK.setAttribute("href", LIGHT_THEME_PATH);
  }
});
