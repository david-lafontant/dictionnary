import display from "./display.js";

async function getWord(e) {
  const texte = document.getElementById("inputBox");
  // const key = e.keyCode || e.which;
  // if (key === 13) {
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
  // }
}

export default getWord;
