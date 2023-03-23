// getWord is a function that fetch the meaning of a word from DIctionary Api

async function getWord(e) {
  const texte = document.getElementById("inputBox");
  const key = e.keyCode || e.which;
  if (key === 13) {
    const spinner = document.getElementById("spinner");
    spinner.removeAttribute("hidden");
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${texte.value}`
    );
    if (!response.ok) {
      spinner.setAttribute("hidden", "");
      const message = `An error has occured: ${response.message}`;
      document.getElementById("definition").innerHTML = message;
      throw new Error(message);
    }
    const result = await response.json();
    display(result);
    spinner.setAttribute("hidden", "");
    texte.value = "";
  }
}

// Change document font family according to select element value
const choice = document.getElementById("fontChoice");
choice.addEventListener(
  "change",
  (e) => {
    e.preventDefault();
    if (e.target.value === "serif") {
      document.body.style.fontFamily = "serif";
    }
    if (e.target.value === "sans-serif") {
      document.body.style.fontFamily = "sans-serif";
    }
    if (e.target.value === "monospace") {
      document.body.style.fontFamily = "monospace";
    }
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
